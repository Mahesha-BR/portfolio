import React from "react";
import { Diveder } from "../page";
import projects from "@/projects.json";
import ProjectGrid from "@/components/ProjectGrid";


export type Project = {
  title: string;
  coverImageUrl: string;
  time: string;
  live: boolean;
  slug: string;
};


const chunked: Project[][] = [];
for (let i = 0; i < projects.length; i += 2) {
  chunked.push(projects.slice(i, i + 2));
}

export default function ProjectsPage() {
  return (
    <div className="fixed inset-0 z-[-99]">
      <div className="h-full overflow-x-hidden overflow-y-scroll scroll-smooth">
        <div className="w-full h-fit pt-14">
          <Diveder />
          <div className="w-full">
            <div className="w-full border-b">
              <div className=" w-full h-12 border-y border-neutral-200/80 dark:border-neutral-800/80">
                <div className=" w-3xl px-4 mx-auto flex items-center h-full border-x border-neutral-200/80 dark:border-neutral-800/80 ">
                  <h1 className="text-4xl leading-0 tracking-tight font-semibold flex justify-center items-center gap-2 ">
                    Projects{" "}
                    <span className="text-neutral-400 text-lg">
                      ({projects.length})
                    </span>
                  </h1>
                </div>
              </div>
              <div className=" w-full md:h-8 h-fit border-b border-neutral-200/80 dark:border-neutral-800/80">
                <div className="md:w-3xl w-full px-4 mx-auto flex items-center h-full border-x border-neutral-200/80 dark:border-neutral-800/80 ">
                  <p className="text-neutral-400 md:leading-0 tracking-tight font-medium flex justify-center items-center gap-2 ">
                    A collection of projects on development, design, and ideas.
                  </p>
                </div>
              </div>
              {projects.length > 0 ? (
                <ProjectGrid projects={projects} />
              ) : (
                <div className=" w-3xl h-fit border-x mx-auto flex flex-col justify-center items-center ">
                  <div className=" grid grid-cols-3 w-full h-full ">
                    <div className=" w-full h-40 border  "></div>
                    <div className=" w-full h-40 border col-span-2  "></div>
                    <div className=" w-full h-40 border col-span-2  "></div>
                    <div className=" w-full h-40 border col-span-1 "></div>
                  </div>
                  <div className=" absolute h-fit mx-auto w-3xl ">
                    <div className=" w-full h-full flex gap-3 flex-col ">
                      <p className="text-3xl font-medium text-center -translate-y-3">
                        No Projects
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Diveder />
          </div>
        </div>
      </div>
    </div>
  );
}





// export const projects: Project[] = [
//   {
//     title: "Building a Collaborative Whiteboard App with Next.js & Fabric.js",
//     coverImageUrl:
//       "https://assets.chanhdai.com/images/blog/react-wheel-picker-joins-vercel-open-source-program.webp",
//     time: "12.07.2025",
//     live: true,
//     slug: "building-a-collaborative-whiteboard-app-with-nextjs-fabricjs",
//   },
//   {
//     title: "Deploying a Portfolio Website on Raspberry Pi with PostgreSQL",
//     coverImageUrl:"https://www.kishore-sv.me/_next/image?url=https%3A%2F%2Fkishore-protfolio.s3.amazonaws.com%2Fd38caf43-450f-4417-9bd2-2d6f5b2f448b-home_dark.png&w=1080&q=75",
//     time: "20.07.2025",
//     live: false,
//     slug: "deploying-a-portfolio-website-on-raspberry-pi-with-postgresql",
//   },
//   {
//     title: "AI-Powered Portfolio Generator with Resume Upload",
//     coverImageUrl:
//       "https://www.kishore-sv.me/_next/image?url=https%3A%2F%2Fkishore-protfolio.s3.amazonaws.com%2F1d3f7859-8e54-474b-bcae-8ef667ce66c1-page.png&w=1080&q=75",
//     time: "01.08.2025",
//     live: true,
//     slug: "ai-powered-portfolio-generator-with-resume-upload",
//   },
//   {
//     title: "Real-Time Video Meeting App using WebRTC & Socket.IO",
//     coverImageUrl:
//       "https://www.kishore-sv.me/_next/image?url=https%3A%2F%2Fkishore-protfolio.s3.amazonaws.com%2F67a2fc80-13ce-4e56-8d40-db60c2cac598-toast2.png&w=1080&q=75",
//     time: "15.08.2025",
//     live: false,
//     slug: "real-time-video-meeting-app-using-webrtc",
//   },
// ];