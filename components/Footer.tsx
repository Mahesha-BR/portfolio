import { LucideLinkedin } from "lucide-react";
import { GitHubIcon, XIcon } from "mmk-icons";
import Link from "next/link";

export default function Footer(){
    return(
         <footer className=" border-y border-neutral-200/80 dark:border-neutral-800/80 h-10">
            <div className=" md:w-3xl w-full border-x border-neutral-200/80 dark:border-neutral-800/80 mx-auto h-full flex justify-between items-center px-2  ">
              <p className="text-sm">Built with love by MAHESHA</p>
              <div className=" flex justify-center items-center gap-2 ">
                <Link target="_blank" href="https://x.com/mahesha" className=" transition-opacity opacity-70 hover:opacity-100">
                  <XIcon fill="#fff" className=" h-6 w-6 shrink-0 " />
                </Link>
                 <Link target="_blank" href="https://github.com/Mahesha-BR" className=" transition-opacity opacity-70 hover:opacity-100">
                  <GitHubIcon fill="#fff" className=" h-6 w-6 shrink-0 " />
                </Link>
                 <Link target="_blank" href="https://x.com/mahesha" className=" transition-opacity opacity-70 hover:opacity-100">
                  <LucideLinkedin fill="#fff" className=" h-6 w-6 shrink-0 " />
                </Link>
              </div>
            </div>
          </footer>
    )
}