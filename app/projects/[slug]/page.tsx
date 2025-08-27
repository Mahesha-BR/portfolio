import { Diveder } from "@/app/page";
import MdxRenderer from "@/components/mdx-renderer";
import ProjectStackDisplay from "@/components/project-stack-display";
import { getMdx } from "@/utils/lib/mdx";
import { ArrowLeft, ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
import Link from "next/link";
import path from "path";

type Props = {
    params: Promise<{ slug: string }>;
}

const POSTS_PATH = path.join(process.cwd(), "/app/projects/mdx/");

export default async function SingleProjectPage({ params }: Props) {
  const { slug } = await params;
  const fullPath = path.join(POSTS_PATH, `${slug}`);
  console.log(fullPath);
  const { mdxSource, frontmatter } = await getMdx(fullPath);
  return (
    <div className="fixed inset-0 z-[-99]">
      <div className="h-full overflow-x-hidden overflow-y-scroll scroll-smooth">
        <div className="w-full h-fit pt-14">
          <Diveder />
        </div>
        <div className="w-full h-12 border-y">
          <div className=" md:w-3xl w-full h-full border-x mx-auto px-3 py-3 flex items-center ">
            <Link
              href="/projects"
              className=" w-fit px-2 text-neutral-600 dark:text-neutral-500 flex items-center gap-2 hover:underline hover:underline-offset-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-shadow-2xs font-medium">Projects</span>
            </Link>
          </div>
        </div>
        <div className="w-full h-fit border-b">
          <Diveder />
        </div>
        <div className="w-full h-fit border-y">
          <div className=" md:w-3xl w-full text-3xl text-wrap font-medium h-full border-x mx-auto px-3 py-1 flex items-center ">
            {frontmatter && <h1>{frontmatter.title}</h1>}
          </div>
        </div>
        <div className="w-full h-fit">
          <div className="md:w-3xl w-full h-full mx-auto border-x py-2 ">
            {frontmatter.imageUrl && (
              <div className=" w-full md:w-3xl mx-auto border h-60 overflow-hidden py-4 md:h-115 flex justify-center items-center px-4 ">
                <div className=" w-full h-fit md:h-105 overflow-hidden rounded-md border">
                  <img
                    className=" w-full h-full object-cover"
                    src={frontmatter.imageUrl}
                    alt={frontmatter.title}
                  />
                </div>
              </div>
            )}

            <div className="w-full h-fit flex ">
              {/* <ProjectStackDisplay /> */}
            </div>
            <div className="w-full h-6 border-y"></div>
            <div className="w-full h-fit border-b py-2 px-4 flex items-center gap-4">
              <Link
                href={"/"}
                className=" px-3 py-2 cursor-pointer group flex justify-center items-center gap-2 font-medium rounded-3xl shadow-inner shadow-neutral-600 dark:shadow-neutral-500 dark:bg-neutral-700 hover:shadow-neutral-500 hover:bg-neutral-700 bg-neutral-800 text-neutral-100"
              >
                <GithubIcon className="size-5 shrink-0" />
                <span>Source</span>
                <ArrowRight className=" group-hover:translate-x-1 transition-transform ease-in-out h-4 w-4 shrink-0" />
              </Link>
              <Link
                href="/blogs"
                className="px-3 py-2 cursor-pointer group flex justify-center items-center gap-2 font-medium rounded-3xl shadow-inner shadow-neutral-600 dark:shadow-neutral-500 dark:bg-neutral-700 hover:shadow-neutral-500 hover:bg-neutral-700 bg-neutral-800 text-neutral-100"
              >
                <ExternalLink className="size-5 shrink-0" />
                <span>Live Preview</span>
                <ArrowRight className=" group-hover:translate-x-1 transition-transform ease-in-out h-4 w-4 shrink-0" />
              </Link>
            </div>
            <div className="w-full h-fit">
              <div className="md:w-3xl w-full h-full mx-auto px-5 py-2">
                <div className="prose dark:prose-invert max-w-none">
                  {mdxSource && <MdxRenderer source={mdxSource} />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full border-y h-6">
          <div className=" w-3xl mx-auto border-x h-full "></div>
        </div>
        <div className="w-full h-fit border-b">
          <Diveder />
        </div>
      </div>
    </div>
  );
}
