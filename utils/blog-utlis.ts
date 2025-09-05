"use server";
import { writeFile, readFile, unlink } from "node:fs/promises";
import path from "node:path";
import { toast } from "sonner";

export type Blog = {
  title: string;
  coverImageUrl: string;
  time: string;
  slug: string;
  mdxContent?: string;
};

export async function AddBlogFunction({
  title,
  coverImageUrl,
  time,
  slug,
  mdxContent,
}: Blog) {
  const blog: Blog = { title, coverImageUrl, time, slug };

  try {
    let blogs: Blog[] = [];

    try {
      const data = await readFile("blogs.json", "utf-8");
      blogs = JSON.parse(data);
    } catch (err) {
      blogs = [];
    }

    blogs.push(blog);

    await writeFile("blogs.json", JSON.stringify(blogs, null, 2), "utf-8");

    toast.success("Blog added successfully!");

    if (mdxContent) {
      const mdxDir = path.join(process.cwd(), "app/blogs/mdx");
      const mdxPath = path.join(mdxDir, `${slug}.mdx`);

      await writeFile(mdxPath, mdxContent, "utf-8");
      toast.success(`MDX file created: ${mdxPath}`);
    }
  } catch (err) {
    toast.error("Error writing blog");
    console.log(err)
  }
}

export async function DeleteBlogFunction(slug: string) {
  try {
    let blogs: Blog[] = [];

    try {
      const data = await readFile("blogs.json", "utf-8");
      blogs = JSON.parse(data);
    } catch (err) {
      toast.warning("No blogs.json found, nothing to delete.");
      return;
    }

    const updatedBlogs = blogs.filter((blog) => blog.slug !== slug);

    if (updatedBlogs.length === blogs.length) {
      toast.warning(`Blog with slug "${slug}" not found.`);
      return;
    }

    await writeFile("blogs.json", JSON.stringify(updatedBlogs, null, 2), "utf-8");
    toast.success(` Blog "${slug}" deleted from blogs.json`);


    const mdxPath = path.join(process.cwd(), "app/blogs/mdx", `${slug}.mdx`);
    try {
      await unlink(mdxPath);
      toast.success(` MDX file deleted: ${mdxPath}`);
    } catch {
      toast.warning(` No MDX file found for "${slug}", skipping...`);
    }
  } catch (err) {
    toast.error(" Error deleting blog");
  }
}
