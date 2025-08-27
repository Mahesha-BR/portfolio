import React from "react";
import { Diveder } from "../page";

 export type Blog = {
  title: string;
  coverImageUrl: string;
  time: string;
  slug: string;
};
import blogs from "@/blogs.json";
import BlogGrid from "@/components/BlogGrid";

const chunked: Blog[][] = [];
for (let i = 0; i < blogs.length; i += 2) {
  chunked.push(blogs.slice(i, i + 2));
}

export default function BlogsPage() {
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
                    Blogs{" "}
                    <span className="text-neutral-400 text-lg">
                      ({blogs.length})
                    </span>
                  </h1>
                </div>
              </div>
              <div className=" w-full md:h-8 h-fit border-b border-neutral-200/80 dark:border-neutral-800/80">
                <div className=" md:w-3xl w-full px-4 mx-auto flex items-center h-full border-x border-neutral-200/80 dark:border-neutral-800/80 ">
                  <p className="text-neutral-400 md:leading-0 tracking-tight font-medium flex justify-center items-center gap-2 ">
                    A collection of articles on development, design, and ideas.
                  </p>
                </div>
              </div>
              {blogs.length > 0 ? (
                <BlogGrid blogs={blogs} />
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
                        No Blogs
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



// export const blogs: Blog[] = [
//   {
//     title: "Building a Full-Stack Portfolio with Next.js & PostgreSQL",
//     coverImageUrl:
//       "https://assets.chanhdai.com/images/blog/250804-manu-arora-reviewed-my-portfolio-website.webp",
//     time: "18.07.2025",
//     slug: "nextjs-postgres-portfolio",
//   },
//   {
//     title: "Why Developers Love ShadCN UI – A Deep Dive",
//     coverImageUrl:
//       "https://assets.chanhdai.com/images/blog/react-wheel-picker-joins-vercel-open-source-program.webp",
//     time: "12.07.2025",
//     slug: "why-developers-love-shadcn-ui",
//   },
//   {
//     title: "AI-Powered Resume to Portfolio Generator in Next.js",
//     coverImageUrl: "https://assets.chanhdai.com/images/blog/welcome.webp",
//     time: "05.07.2025",
//     slug: "ai-powered-portfolio-generator",
//   },
//   {
//     title: "From Vite to Next.js – Choosing the Right React Framework",
//     coverImageUrl: "https://assets.chanhdai.com/images/blog/uptime-kuma.webp",
//     time: "28.06.2025",
//     slug: "vite-vs-nextjs",
//   },
//   {
//     title: "WebRTC & Socket.IO – Building Real-Time Video Apps",
//     coverImageUrl:
//       "https://assets.chanhdai.com/images/blog/writing-effect-inspired-by-apple.webp",
//     time: "20.06.2025",
//     slug: "webrtc-socketio-video-apps",
//   },
// ];