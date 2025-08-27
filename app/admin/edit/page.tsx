"use client";

import { useState } from "react";
import projectsData from "@/projects.json";
import blogData from "@/blogs.json";
import { DeleteProjectFunction } from "@/utils/project-utils";
import { Plus, Trash2 } from "lucide-react";
import { Diveder } from "@/app/page";
import Link from "next/link";
import { DeleteBlogFunction } from "@/utils/blog-utlis";

export default function EditPage() {
  return (
    <>
      <DeleteProjects />
      <div className=" border-y w-full overflow-hidden ">
        <Diveder />
      </div>
      <DeleteBlogs />
    </>
  );
}

function DeleteProjects() {
  const [projects, setProjects] = useState(projectsData);

  const handleDelete = async (slug: string) => {
    const confirmDelete = confirm(`Are you sure you want to delete "${slug}"?`);
    if (!confirmDelete) return;

    try {
      await DeleteProjectFunction(slug);
      setProjects((prev) => prev.filter((project) => project.slug !== slug));
    } catch (err) {
      console.error("❌ Failed to delete project:", err);
    }
  };
  return (
    <div className="p-6 max-w-3xl mx-auto mt-14">
      <h1 className="text-2xl font-bold mb-6">Delete Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
          >
            <div>
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-500">{project.slug}</p>
            </div>
            <button
              onClick={() => handleDelete(project.slug)}
              className="px-4 py-2 flex gap-2 cursor-pointer bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              <Trash2 />
              <span>Delete</span>
            </button>
          </li>
        ))}
      </ul>

      <div className=" border-y my-2 w-full overflow-hidden ">
        <Diveder />
      </div>
      <div className="w-fit mx-auto h-10">
        <Link
          href="/admin/add"
          className="px-4 py-2 my-2 flex gap-2 cursor-pointer bg-neutral-900 dark:bg-neutral-300 dark:text-neutral-900 dark:hover:bg-neutral-100 text-white rounded-lg hover:bg-neutral-700"
        >
          <Plus />
          <span>Add New Project</span>
        </Link>
      </div>
    </div>
  );
}

function DeleteBlogs(){
  const [blogs,setBlogs]=useState(blogData)

   const handleDelete = async (slug: string) => {
    const confirmDelete = confirm(`Are you sure you want to delete "${slug}"?`);
    if (!confirmDelete) return;

    try {
      await DeleteBlogFunction(slug);
      setBlogs((prev) => prev.filter((blog) => blog.slug !== slug));
    } catch (err) {
      console.error("❌ Failed to delete blog:", err);
    }
  };
    return(
         <div className="p-6 max-w-3xl mx-auto mt-14">
      <h1 className="text-2xl font-bold mb-6">Delete Blogs</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li
            key={blog.slug}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
          >
            <div>
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500">{blog.slug}</p>
            </div>
            <button
              onClick={() => handleDelete(blog.slug)}
              className="px-4 py-2 flex gap-2 cursor-pointer bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
                <Trash2/>
            <span>Delete</span>
            </button>
          </li>
        ))}
      </ul>
 <div className=" border-y my-2 w-full overflow-hidden ">
        <Diveder />
      </div>
      <div className="w-fit mx-auto h-10">
        <Link href="/admin/add"
          className="px-4 py-2 my-2 flex gap-2 cursor-pointer bg-neutral-900 dark:bg-neutral-300 dark:text-neutral-900 dark:hover:bg-neutral-100 text-white rounded-lg hover:bg-neutral-700"
        >
          <Plus />
          <span>Add New Blog</span>
        </Link>
      </div>
    </div>
    )
}
