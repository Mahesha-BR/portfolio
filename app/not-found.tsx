import Link from "next/link";
import { Diveder } from "./page";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className=" w-full h-195 fixed pt-14 overflow-hidden  ">
      <div className="border-y w-full h-full flex flex-col justify-center items-center">
        <Diveder />
        <div className=" w-full h-full border-y flex flex-col justify-center items-center">
          <div className=" w-3xl border-x h-full flex flex-col justify-center items-center gap-4 ">
            <h2>Not Found</h2>
            <h3 className=" font-semibold text-7xl ">404</h3>
            <p>Could not find requested resource</p>
            <Link
              href="/"
              className=" px-3 py-1 cursor-pointer group flex justify-center items-center gap-2 font-medium rounded-2xl shadow-inner shadow-neutral-600 dark:shadow-neutral-500 dark:bg-neutral-700 hover:shadow-neutral-500 hover:bg-neutral-700 bg-neutral-800 text-neutral-100"
            >
              <span>Go To Home</span>
              <ArrowRight className=" group-hover:translate-x-1 transition-transform ease-in-out h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      <Diveder />
      </div>
    </div>
  );
}
