"use client";

import { useTheme } from "next-themes";
import { SunMedium, MoonStar } from "lucide-react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer shrink-0 flex justify-center items-center h-8 w-8 border border-neutral-400 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors ease-in-out overflow-hidden rounded-full "
    >
      <SunMedium className="h-5 w-5 block dark:hidden " />
      <MoonStar className="h-5 w-5 hidden dark:block " />
    </button>
  );
}
