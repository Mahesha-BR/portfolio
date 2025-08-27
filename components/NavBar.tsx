"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import ThemeButton from "./theme-button";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/lib/utils";
import SearchModal from "./searchModel";

export default function NavBar() {
  const path = usePathname();

  const [open, setOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      console.log("command+k");
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
      if (cmdOrCtrl && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      }

      if (e.key === "Escape") setOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-screen h-14 bg-inherit shadow-sm z-[999] top-0 fixed pt-2 ">
      <nav className="w-full h-full border-y border-neutral-200/80 dark:border-neutral-800/80 flex justify-center ">
        <div className="flex border-x border-neutral-200/80 dark:border-neutral-800/80 px-3 md:justify-between items-center w-full md:max-w-3xl md:w-3xl">
          <section
            className={` h-full transition-opacity duration-500 ${
              true ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="md:w-50 w-30 h-full ">
              <Link href="/" className="w-full h-full">
                <div className=" w-1/2 h-full p-2 border-r border-neutral-200/80 dark:border-neutral-800/80 ">
                  <img
                    src="/logo.svg"
                    draggable={false}
                    alt="MBR"
                    className="w-full h-full"
                  />
                </div>
              </Link>
            </div>
          </section>
          <section className=" w-[100%] md:w-[55%] h-full py-2 flex justify-center items-center gap-3 ">
            <Link
              href="/"
              className={`${
                path === "/" ? "" : "text-neutral-400 dark:text-neutral-500"
              } font-semibold font-mono hidden md:block cursor-pointer transition-colors ease-in-out text-[15px]`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`${
                path.startsWith("/projects")
                  ? ""
                  : "text-neutral-400 dark:text-neutral-500"
              } font-semibold font-mono hidden md:block cursor-pointer transition-colors ease-in-out text-[15px]`}
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className={`${
                path.startsWith("/blogs")
                  ? ""
                  : "text-neutral-400 dark:text-neutral-500"
              } font-semibold font-mono hidden md:block cursor-pointer transition-colors ease-in-out text-[15px]`}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className={`${
                path.startsWith("/contact")
                  ? ""
                  : "text-neutral-400 dark:text-neutral-500"
              } font-semibold font-mono hidden md:block cursor-pointer transition-colors ease-in-out text-[15px]`}
            >
              Contact
            </Link>
            <div
              ref={inputRef}
              onClick={() => setOpen(true)}
              className="md:w-[16%] w-[50%] h-full flex justify-center items-center gap-2 rounded-full border border-neutral-400 shadow-inner shadow-neutral-200 dark:shadow-neutral-700 dark:border-neutral-800 "
            >
              {/* <input
                type="search"
                className=" w-full rounded-full border border-neutral-800 "
              /> */}
              <Search className="w-4 h-4 text-neutral-700 dark:text-neutral-400" />
              <div className=" hidden md:block bg-neutral-100 dark:bg-neutral-800 rounded-sm shadow-inner text-sm ">
                ⌘K
              </div>
            </div>
            <Link
            target="_blank"
              href="https://github.com/Mahesha-BR"
              className="flex justify-center items-center h-8 w-8 shrink-0 border border-neutral-400 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors ease-in-out overflow-hidden rounded-full "
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 ">
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
            <ThemeButton />
           <MobileDropdown/>
          </section>
        </div>
      </nav>

      {!!open && (
        <SearchModal
          containerRef={containerRef}
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  );
}

//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="#fff" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>


export function MobileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative md:hidden" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
      >
        <span
          className={cn(
            "absolute w-6 h-0.5 bg-neutral-800 dark:bg-neutral-200 rounded transition-all duration-300",
            isOpen ? "rotate-45" : "-translate-y-1.5"
          )}
        />
        <span
          className={cn(
            "absolute w-6 h-0.5 bg-neutral-800 dark:bg-neutral-200 rounded transition-all duration-300",
            isOpen ? "-rotate-45" : "translate-y-1.5"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-50 bg-white dark:bg-neutral-900 rounded-lg shadow-lg z-50">
          <nav className="flex flex-col text-sm font-medium">
            <Link
              href="/"
              className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-t-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-b-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}