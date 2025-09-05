"use client";
import { techs } from "@/utils/tech";

export default function ProjectStackDisplay({ stack }: { stack: string[] }) {
  return (
    <div className="w-full h-full flex items-center gap-3 flex-wrap px-4 py-3">
      {stack.map((name: string, idx: number) => {
        const match = techs.find((t) => t.name === name);

        return (
          <div
            key={idx}
            className="hover:bg-neutral-100 transition-colors ease-linear dark:hover:bg-neutral-900 h-full flex items-center gap-2 border rounded p-2"
          >
            {match?.icon}
            <p className="text-shadow-xs font-medium">{name}</p>
          </div>
        );
      })}
    </div>
  );
}
