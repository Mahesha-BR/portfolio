import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SocialsComponent() {
  return (
    <div className="w-full border-y border-neutral-200/80 dark:border-neutral-800/80 ">
      <div className="w-full h-full">
        <div className="md:w-3xl w-full mx-auto h-fit md:h-20 border-x flex flex-col md:flex-row items-center justify-evenly border-neutral-200/80 dark:border-neutral-800/80">
          <Link
            target="_blank"
            href="https://github.com/Mahesha-BR"
            className="flex group w-full md:w-1/2 gap-4 h-full px-4 py-3"
          >
            <div className=" rounded-md h-14 w-14 overflow-hidden">
              <img
                src="/github.webp"
                className="rounded-md w-full h-full"
                alt="Github"
              />
            </div>
            <div className=" flex-1 flex-col flex justify-center ">
              <p className=" group-hover:underline group-hover:underline-offset-2 ">
                Github
              </p>
              <p className="text-sm text-neutral-500">@Mahesha-BR</p>
            </div>
            <ArrowUpRight className=" transition-transform ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500 my-auto h-5 w-5 shrink-0 " />
          </Link>
          <div className="md:h-full w-full h-6 border-y md:w-6 md:border-y-0 md:border-x border-neutral-200/80 dark:border-neutral-800/80 "></div>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/mahesha-br-3096822b9/"
            className="flex group w-full md:w-1/2 gap-4 h-full px-4 py-3"
          >
            <div className=" rounded-md h-14 w-14 overflow-hidden">
              <img
                src="/linkedin.webp"
                className="rounded-md w-full h-full"
                alt="Linkedin"
              />
            </div>
            <div className=" flex-1 flex-col flex justify-center ">
              <p className=" group-hover:underline group-hover:underline-offset-2 ">
                LinkedIn
              </p>
              <p className="text-sm text-neutral-500">@mahesha-br-3096822b9</p>
            </div>
            <ArrowUpRight className="transition-transform ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500 my-auto h-5 w-5 shrink-0 " />
          </Link>
        </div>
        <div className=" w-full border-y border-neutral-200/80 dark:border-neutral-800/80 h-6  ">
          <div className="w-3xl h-full mx-auto border-x border-neutral-200/80 dark:border-neutral-800/80">
            <div className=" w-6 border-x mx-auto h-full border-neutral-200/80 dark:border-neutral-800/80  "></div>
          </div>
        </div>
        <div className="md:w-3xl w-full mx-auto h-fit md:h-20 border-x flex flex-col md:flex-row items-center justify-evenly border-neutral-200/80 dark:border-neutral-800/80">
          <Link
            target="_blank"
            href="https://x.com/mahesha2004"
            className="flex group w-full md:w-1/2 gap-4 h-full px-4 py-3"
          >
            <div className=" rounded-md h-14 w-14 overflow-hidden">
              <img src="/x.webp" className="rounded-md w-full h-full" alt="" />
            </div>
            <div className=" flex-1 flex-col flex justify-center ">
              <p className=" group-hover:underline group-hover:underline-offset-2 ">
                X
              </p>
              <p className="text-sm text-neutral-500">@mahesha2004</p>
            </div>
            <ArrowUpRight className="transition-transform ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500 my-auto h-5 w-5 shrink-0 " />
          </Link>
          <div className="md:h-full w-full h-6 border-y md:w-6 md:border-y-0 md:border-x border-neutral-200/80 dark:border-neutral-800/80 "></div>
          <Link
            target="_blank"
            href="https://leetcode.com/mahesha2004"
            className="flex group w-full md:w-1/2 gap-4 h-full px-4 py-3"
          >
            <div className="dark:shadow-xs shadow-neutral-700 rounded-md h-14 w-14 overflow-hidden">
              <img
                src="/leetcode.png"
                className="rounded-md w-full h-full"
                alt="Leetcode"
              />
            </div>
            <div className=" flex-1 flex-col flex justify-center ">
              <p className="group-hover:underline group-hover:underline-offset-2 ">
                Leetcode
              </p>
              <p className="text-sm text-neutral-500">@mahesha2004</p>
            </div>
            <ArrowUpRight className="transition-transform ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500 my-auto h-5 w-5 shrink-0 " />
          </Link>
        </div>
      </div>
    </div>
  );
}
