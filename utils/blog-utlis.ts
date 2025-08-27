"use server";
import { writeFile, readFile,unlink } from "node:fs/promises";
import path from "node:path";

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

        console.log("✅ Blog added successfully!");

        if (mdxContent) {
            const mdxDir = path.join(process.cwd(), "app/blogs/mdx");
            const mdxPath = path.join(mdxDir, `${slug}.mdx`);

            await writeFile(mdxPath, mdxContent, "utf-8");
            console.log(`✅ MDX file created: ${mdxPath}`);
        }
    } catch (err) {
        console.error("❌ Error writing blog:", err);
    }
}



export async function DeleteBlogFunction(slug: string) {
    try {
        let blogs: Blog[] = [];

        try {
            const data = await readFile("blogs.json", "utf-8");
            blogs = JSON.parse(data);
        } catch (err) {
            console.warn("⚠️ No blogs.json found, nothing to delete.");
            return;
        }

        const updatedBlogs = blogs.filter((blog) => blog.slug !== slug);

        if (updatedBlogs.length === blogs.length) {
            console.warn(`⚠️ Blog with slug "${slug}" not found.`);
            return;
        }

        // Write updated list back
        await writeFile("blogs.json", JSON.stringify(updatedBlogs, null, 2), "utf-8");
        console.log(`✅ Blog "${slug}" deleted from blogs.json`);

        // Delete MDX file if exists
        const mdxPath = path.join(process.cwd(), "app/blogs/mdx", `${slug}.mdx`);
        try {
            await unlink(mdxPath);
            console.log(`✅ MDX file deleted: ${mdxPath}`);
        } catch {
            console.warn(`⚠️ No MDX file found for "${slug}", skipping...`);
        }
    } catch (err) {
        console.error("❌ Error deleting blog:", err);
    }
}