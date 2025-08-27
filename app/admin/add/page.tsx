"use client";
import { Diveder } from "@/app/page";
import MdxRenderer from "@/components/mdx-renderer";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { useEffect, useState } from "react";
import { AddProjectFunction } from "@/utils/project-utils";
import { AddBlogFunction } from "@/utils/blog-utlis";
import slugify from "@/utils/lib/slugify";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Project = {
  title: string;
  coverImageUrl: string;
  time: string;
  live: boolean;
  slug: string;
  stack: string;
  mdxContent: string;
  sourceLink: string;
  websiteLink: string;
};

export type Blog = {
  title: string;
  coverImageUrl: string;
  time: string;
  slug: string;
  mdxContent?: string;
};

export default function AddPage() {
  return (
    <>
      <AddProject />
      <AddBlog />
    </>
  );
}

function AddProject() {
  const [form, setForm] = useState({
    title: "",
    imageUrl: "",
    timeline: "",
    stack: "",
    mdxContent: "",
    sourceLink: "",
    websiteLink: "",
  });

  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  useEffect(() => {
    const render = async () => {
      if (!form.mdxContent) {
        setMdxSource(null);
        return;
      }

      const mdx = await serialize(form.mdxContent, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
              },
            ],
          ],
        },
        scope: {},
      });

      setMdxSource(mdx);
    };

    render();
  }, [form.mdxContent]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload first

    const slug = slugify(form.title);

    const projectData: Project = {
      ...form,
      slug,
      live: true,
      coverImageUrl: form.imageUrl,
      time: form.timeline,
    };

    try {
      await AddProjectFunction(projectData);
      console.log("✅ Project Submitted:", projectData);
    } catch (err) {
      console.error("❌ Error submitting project:", err);
    }
  };

  return (
    <div className="w-full mt-14 h-full">
      <form
        onSubmit={handleSubmit}
        className="w-3xl mx-auto border-x border-neutral-200/80 dark:border-neutral-800/80"
      >
        <h1 className="text-2xl font-semibold text-center mb-8">
          Add New Project
        </h1>

        <div className="flex items-start justify-evenly py-6">
          {/* Left Side - Project Cover Preview */}
          <div className="group w-1/2 h-full px-4">
            <div className="relative w-full h-60 border bg-neutral-200 dark:bg-neutral-800 rounded-md overflow-hidden flex items-center justify-center">
              {form.imageUrl ? (
                <img
                  src={form.imageUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-neutral-500">Image Preview</span>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-full w-6 border-x border-neutral-200/80 dark:border-neutral-800/80" />

          {/* Right Side - Form Fields */}
          <div className="w-1/2 px-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
                placeholder="Enter project title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
                placeholder="Paste image link"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Timeline</label>
              <input
                type="date"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Source Link
              </label>
              <input
                type="text"
                name="sourceLink"
                value={form.sourceLink}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
                placeholder="Github repo link"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Website Link
              </label>
              <input
                type="text"
                name="websiteLink"
                value={form.websiteLink}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
                placeholder="Website url"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Project Stack
              </label>
              <input
                type="text"
                name="stack"
                value={form.stack}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
                placeholder="e.g. Next.js, PostgreSQL, Tailwind"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full border-y border-neutral-200/80 dark:border-neutral-800/80 h-6">
          <div className="w-3xl h-full mx-auto border-x border-neutral-200/80 dark:border-neutral-800/80">
            <div className="w-6 border-x mx-auto h-full border-neutral-200/80 dark:border-neutral-800/80" />
          </div>
        </div>

        {/* MDX Content Section */}
        <div className="px-6 py-6">
          <label className="block text-sm font-medium mb-1">MDX Content</label>
          <textarea
            name="mdxContent"
            value={form.mdxContent}
            onChange={handleChange}
            rows={10}
            className="w-full rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
            placeholder="---
            title: 'title of projects'
            imageUrl: 'image url of cover image'
            ---
            Write your title and imageUrl MDX project content here..."
          />
        </div>

        <div className="px-6 py-6 w-full h-fit border-t border-neutral-200/80 dark:border-neutral-800/80">
          <label className="block text-sm font-medium mb-1">MDX Preview</label>
          <div className="prose dark:prose-invert max-w-none">
            {mdxSource ? (
              <MdxRenderer source={mdxSource} />
            ) : (
              <p className="text-neutral-400">
                Start typing MDX above to see a live preview...
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center py-6">
          <button
            type="submit"
            className="px-6 py-2 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium"
          >
            Submit Project
          </button>
        </div>
      </form>
      <div className=" w-full border-y ">
        <Diveder />
      </div>
    </div>
  );
}

function AddBlog() {
  const [form, setForm] = useState({
    title: "",
    imageUrl: "",
    timeline: "",
    mdxContent: "",
  });

  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  useEffect(() => {
    const render = async () => {
      if (!form.mdxContent) {
        setMdxSource(null);
        return;
      }

      const mdx = await serialize(form.mdxContent, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
              },
            ],
          ],
        },
        scope: {},
      });

      setMdxSource(mdx);
    };

    render();
  }, [form.mdxContent]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Blog Submitted:", form);
    const slug = slugify(form.title);

    const blogData: Blog = {
      ...form,
      slug,
      coverImageUrl: form.imageUrl,
      time: form.timeline,
    };

    try {
      await AddBlogFunction(blogData);
      console.log("✅ Blog Submitted:", blogData);
    } catch (err) {
      console.error("❌ Error submitting Blog:", err);
    }
  };

  return (
    <div className="w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="w-3xl mx-auto border-x border-neutral-200/80 dark:border-neutral-800/80"
      >
        <h1 className="text-2xl font-semibold text-center mb-8">
          Add New Blog
        </h1>

        <div className="flex items-start justify-evenly py-6">
          {/* Left Side - Project Cover Preview */}
          <div className="group w-1/2 h-full px-4">
            <div className="relative w-full h-60 border bg-neutral-200 dark:bg-neutral-800 rounded-md overflow-hidden flex items-center justify-center">
              {form.imageUrl ? (
                <img
                  src={form.imageUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-neutral-500">Image Preview</span>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-full w-6 border-x border-neutral-200/80 dark:border-neutral-800/80" />

          {/* Right Side - Form Fields */}
          <div className="w-1/2 px-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
                placeholder="Paste image link"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Timeline</label>
              <input
                type="date"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full border-y border-neutral-200/80 dark:border-neutral-800/80 h-6">
          <div className="w-3xl h-full mx-auto border-x border-neutral-200/80 dark:border-neutral-800/80">
            <div className="w-6 border-x mx-auto h-full border-neutral-200/80 dark:border-neutral-800/80" />
          </div>
        </div>

        {/* MDX Content Section */}
        <div className="px-6 py-6">
          <label className="block text-sm font-medium mb-1">MDX Content</label>
          <textarea
            name="mdxContent"
            value={form.mdxContent}
            onChange={handleChange}
            rows={10}
            className="w-full rounded-md border px-3 py-2 bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
            placeholder="Write your MDX blog content here..."
          />
        </div>
        <div className="px-6 py-6 w-full h-fit border-t border-neutral-200/80 dark:border-neutral-800/80">
          <label className="block text-sm font-medium mb-1">MDX Preview</label>
          <div className="prose dark:prose-invert max-w-none">
            {mdxSource ? (
              <MdxRenderer source={mdxSource} />
            ) : (
              <p className="text-neutral-400">
                Start typing MDX above to see a live preview...
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center py-6">
          <button
            type="submit"
            className="px-6 py-2 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium"
          >
            Submit Blog
          </button>
        </div>
      </form>
      <div className=" w-full border-y ">
        <Diveder />
      </div>
    </div>
  );
}
