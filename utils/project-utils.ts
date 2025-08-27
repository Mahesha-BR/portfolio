"use server";
import { writeFile, readFile,unlink } from "node:fs/promises";
import path from "node:path";

export type Project = {
    title: string;
    coverImageUrl: string;
    time: string;
    live: boolean;
    slug: string;
    sourceLink?: string;
    websiteLink?: string;
    mdxContent?: string;
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
}: Project) {
    const project: Project = { title, coverImageUrl, time, live, slug, sourceLink, websiteLink };

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

        console.log("✅ Project added successfully!");

        if (mdxContent) {
            const mdxDir = path.join(process.cwd(), "app/projects/mdx");
            const mdxPath = path.join(mdxDir, `${slug}.mdx`);

            await writeFile(mdxPath, mdxContent, "utf-8");
            console.log(`✅ MDX file created: ${mdxPath}`);
        }
    } catch (err) {
        console.error("❌ Error writing project:", err);
    }
}



export async function DeleteProjectFunction(slug: string) {
    try {
        let projects: Project[] = [];

        try {
            const data = await readFile("projects.json", "utf-8");
            projects = JSON.parse(data);
        } catch (err) {
            console.warn("⚠️ No projects.json found, nothing to delete.");
            return;
        }

        // Filter out the project by slug
        const updatedProjects = projects.filter((project) => project.slug !== slug);

        if (updatedProjects.length === projects.length) {
            console.warn(`⚠️ Project with slug "${slug}" not found.`);
            return;
        }

        // Write updated list back
        await writeFile("projects.json", JSON.stringify(updatedProjects, null, 2), "utf-8");
        console.log(`✅ Project "${slug}" deleted from projects.json`);

        // Delete MDX file if exists
        const mdxPath = path.join(process.cwd(), "app/projects/mdx", `${slug}.mdx`);
        try {
            await unlink(mdxPath);
            console.log(`✅ MDX file deleted: ${mdxPath}`);
        } catch {
            console.warn(`⚠️ No MDX file found for "${slug}", skipping...`);
        }
    } catch (err) {
        console.error("❌ Error deleting project:", err);
    }
}