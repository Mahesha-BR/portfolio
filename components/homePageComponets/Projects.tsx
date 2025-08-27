import projects from "@/projects.json"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectGrid from "../ProjectGrid";



export default function ProjectsComponent() {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className=" w-full h-12 border-y border-neutral-200/80 dark:border-neutral-800/80">
          <div className=" w-full md:w-3xl px-4 mx-auto flex items-center h-full border-x border-neutral-200/80 dark:border-neutral-800/80 ">
            <h1 className="text-4xl leading-0 tracking-tight font-semibold flex justify-center items-center gap-2 ">
              Projects <span className="text-neutral-400 text-lg">({projects.length})</span>
            </h1>
          </div>
        </div>

        <ProjectGrid projects={projects} limit={4}/>

      </div>
      <div className=" w-full border-y border-neutral-200/80 dark:border-neutral-800/80 h-12">
        <div className="md:w-3xl w-full h-full flex justify-center items-center mx-auto border-x border-neutral-200/80 dark:border-neutral-800/80">
          <Link
            href="/blogs"
            className=" px-3 py-1 cursor-pointer group flex justify-center items-center gap-2 font-medium rounded-2xl shadow-inner shadow-neutral-600 dark:shadow-neutral-500 dark:bg-neutral-700 hover:shadow-neutral-500 hover:bg-neutral-700 bg-neutral-800 text-neutral-100"
          >
            <span>All Projects</span>
            <ArrowRight className=" group-hover:translate-x-1 transition-transform ease-in-out h-4 w-4 shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}
