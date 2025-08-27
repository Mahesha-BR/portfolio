import { CodeXml, Globe, MailIcon, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function DetailsComponent(){
    return(
          <div className="w-full border-y border-neutral-200/80 dark:border-neutral-800/80">
            <div className="max-w-3xl p-4 flex flex-col gap-3 h-full mx-auto border-x border-neutral-200/80 dark:border-neutral-800/80">
              <div className="w-full flex items-center gap-3">
                <div
                  className="flex size-6 shrink-0 items-center justify-center shadow-sm rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15"
                  aria-hidden="true"
                >
                  <CodeXml className=" w-4 h-4 shrink-0 text-neutral-500  " />
                </div>
                <p className=" font-medium text-ellipsis text-md font-mono md:leading-0 tracking-wide">
                  MERN Full Stack & AI ML Developer
                </p>
              </div>
              <div className="w-full flex items-center gap-3">
                <div
                  className="flex size-6 shrink-0 items-center justify-center rounded-lg shadow-sm bg-neutral-100 dark:bg-neutral-800  dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15"
                  aria-hidden="true"
                >
                  <MapPin className=" w-4 h-4 shrink-0 text-neutral-500 " />
                </div>
                <p className=" font-medium text-ellipsis text-md font-mono md:leading-0 tracking-wide">
                  Bengaluru, India 🇮🇳
                </p>
              </div>
              <div className="w-full flex items-center gap-3">
                <div
                  className="flex size-6 shrink-0 items-center justify-center rounded-lg shadow-sm bg-neutral-100 dark:bg-neutral-800  dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15"
                  aria-hidden="true"
                >
                  <Phone className=" w-4 h-4 shrink-0 text-neutral-500 " />
                </div>
                <Link
                  href="tel:+917899304607"
                  className="hover:underline hover:underline-offset-2 font-medium text-ellipsis text-md font-mono md:leading-0 tracking-wide"
                >
                  +91 78993 04607
                </Link>
              </div>
              <div className="w-full flex items-center gap-3">
                <div
                  className="flex size-6 shrink-0 items-center justify-center rounded-lg shadow-sm bg-neutral-100 dark:bg-neutral-800 dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15"
                  aria-hidden="true"
                >
                  <MailIcon className=" w-4 h-4 shrink-0 text-neutral-500 " />
                </div>
                <Link
                  href="mailto:maheshabr2004@gmail.com"
                  className="font-medium hover:underline hover:underline-offset-2 text-ellipsis text-md font-mono md:leading-0 tracking-wide"
                >
                  maheshabr2004@gmail.com
                </Link>
              </div>
              <div className="w-full flex items-center gap-3">
                <div
                  className="flex size-6 shrink-0 items-center justify-center rounded-lg shadow-sm bg-neutral-100 dark:bg-neutral-800  dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15"
                  aria-hidden="true"
                >
                  <Globe className=" w-4 h-4 shrink-0 text-neutral-500 " />
                </div>
                <Link
                  href="https://www.mahesha.dev"
                  className="hover:underline hover:underline-offset-2 font-medium text-ellipsis text-md font-mono md:leading-0 tracking-wide"
                >
                  mahesha.dev
                </Link>
              </div>
            </div>
          </div>
    )
}