import { Project } from "@/app/projects/page";
import Link from "next/link";
import React from "react";

type ProjectGridProps = {
  projects: Project[];
  limit?: number;
};

export default function ProjectGrid({ projects, limit }: ProjectGridProps) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  const chunked = [];
  for (let i = 0; i < visibleProjects.length; i += 2) {
    chunked.push(visibleProjects.slice(i, i + 2));
  }

  return (
    <div className="w-full h-full">
      {chunked.map((pair, index) => (
        <div key={index}>
          <div
            className={`md:w-3xl w-full mx-auto h-fit md:h-75 border-x flex flex-col md:flex-row items-center ${
              pair.length === 1 ? "justify-start" : "justify-evenly"
            } border-neutral-200/80 dark:border-neutral-800/80`}
          >
            {pair.map((project, i) => (
              <React.Fragment key={i}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group w-full md:w-1/2 h-full px-4 py-3"
                >
                  <div className="relative w-full h-50 border bg-neutral-200 dark:bg-neutral-800 rounded-md overflow-hidden">
                    <img
                      src={project.coverImageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {project.live && (
                      <div className="absolute top-1 right-1 h-6 w-10 bg-blue-400 text-neutral-100 rounded-md flex justify-center items-center">
                        <span className="text-center text-sm text-shadow-2xs">
                          Live
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="w-[80%] overflow-hidden mt-1">
                    <h2 className="text-lg line-clamp-2 group-hover:underline group-hover:underline-offset-2 font-medium">
                      {project.title}
                    </h2>
                    <p className="text-neutral-400 mt-1 text-sm">
                      {project.time}
                    </p>
                  </div>
                </Link>

                {i === 0 && pair.length > 1 && (
                  <div className="h-full w-6 border-x border-neutral-200/80 dark:border-neutral-800/80" />
                )}
              </React.Fragment>
            ))}
          </div>

          {index < chunked.length - 1 && (
            <div className="w-full border-y border-neutral-200/80 dark:border-neutral-800/80 h-6">
              <div className="w-3xl h-full mx-auto border-x border-neutral-200/80 dark:border-neutral-800/80">
                <div className="w-6 border-x mx-auto h-full border-neutral-200/80 dark:border-neutral-800/80" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}