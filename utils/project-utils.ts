"use server";
import { writeFile, readFile, unlink } from "node:fs/promises";
import path from "node:path";
import { toast } from "sonner";

export type Project = {
  title: string;
  coverImageUrl: string;
  time: string;
  live: boolean;
  slug: string;
  sourceLink?: string;
  websiteLink?: string;
  mdxContent?: string;
  stack?: string[];
};

export async function AddProjectFunction({
  title,
  coverImageUrl,
  time,
  live,
  slug,
  sourceLink,
  websiteLink,
  mdxContent,
  stack,
}: Omit<Project, "stack"> & { stack?: string }) {
  const arrayStack = stack ? stack.split(",").map((s) => s.trim()) : [];
  const project: Project = {
    title,
    coverImageUrl,
    time,
    live,
    slug,
    sourceLink,
    websiteLink,
    stack: arrayStack,
  };

  try {
    let projects: Project[] = [];

    try {
      const data = await readFile("projects.json", "utf-8");
      projects = JSON.parse(data);
    } catch (err) {
      projects = [];
    }

    projects.push(project);

    await writeFile("projects.json", JSON.stringify(projects, null, 2), "utf-8");

    toast.success("Project added successfully!");

    if (mdxContent) {
      const mdxDir = path.join(process.cwd(), "app/projects/mdx");
      const mdxPath = path.join(mdxDir, `${slug}.mdx`);

      await writeFile(mdxPath, mdxContent, "utf-8");
    }
  } catch (err) {
    // toast.error(" Error writing project");
    console.log(err)
  }
}

export async function DeleteProjectFunction(slug: string) {
  try {
    let projects: Project[] = [];

    try {
      const data = await readFile("projects.json", "utf-8");
      projects = JSON.parse(data);
    } catch (err) {
      toast.warning("No projects.json found, nothing to delete.");
      return;
    }

    const updatedProjects = projects.filter((project) => project.slug !== slug);

    if (updatedProjects.length === projects.length) {
      toast.warning(`Project with slug "${slug}" not found.`);
      return;
    }

    await writeFile("projects.json", JSON.stringify(updatedProjects, null, 2), "utf-8");
    toast.success(`Project "${slug}" deleted from projects.json`);

    const mdxPath = path.join(process.cwd(), "app/projects/mdx", `${slug}.mdx`);
    try {
      await unlink(mdxPath);
    } catch {
      toast.warning(`No MDX file found for "${slug}", skipping...`);
    }
  } catch (err) {
    toast.error("Error deleting project");
  }
}
