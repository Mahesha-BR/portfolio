import { techs } from "@/utils/tech";
import { ReactNode } from "react";

type TooltipProps = {
  icon: ReactNode;
  className?: string;
  tipName: string;
};

export default function StackComponent() {
  return (
    <div className="w-full border-y border-neutral-200/80 dark:border-neutral-800/80">
      <div className="w-full">
        <div className=" w-full h-12 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div className=" md:w-3xl w-full px-4 mx-auto flex items-center h-full border-x border-neutral-200/80 dark:border-neutral-800/80 ">
            <h1 className="text-4xl leading-0 tracking-tight font-semibold ">
              Stack & Tools
            </h1>
          </div>
        </div>
        <div className="md:w-3xl w-full flex flex-wrap  items-center gap-2 border-x border-neutral-200/80 dark:border-neutral-800/80 px-4 py-3 mx-auto">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="dark:hover:bg-neutral-800 hover:bg-neutral-200 transition-colors ease-in-out flex flex-col items-center justify-center gap-2 border border-neutral-200/80 dark:border-neutral-800/80 rounded-md p-0.5"
            >
              {/* {tech.icon} */}
              <Tooltip icon={tech.icon} tipName={tech.name}/>
              {/* <p className="text-sm text-neutral-500">{tech.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export const Tooltip = ({ icon, className, tipName }: TooltipProps) => {
  return (
    <div className="flex gap-4 font-mono">
      <div className="text-center">
        <div
          className={` ${className} relative inline-flex w-10 h-10 items-center justify-center group`}
        >
          {icon}
          <span
            className="
              absolute bottom-full left-1/2 -translate-x-1/2 mb-3
              px-3 py-1 rounded bg-neutral-300 dark:text-neutral-200 dark:bg-neutral-800 text-sm font-semibold
              opacity-0 invisible translate-y-2
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-200 ease-in-out
              pointer-events-none
            "
          >
            {tipName}
            <span
              className="
                absolute left-1/2 top-full -translate-x-1/2
                border-x-4 border-x-transparent border-t-4 border-t-neutral-300 dark:border-t-neutral-800
              "
            ></span>
          </span>
        </div>
      </div>
    </div>
  );
};