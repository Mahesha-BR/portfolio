"use client";

import { Diveder } from "@/app/page";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Signin() {
  const handleGitHubLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    if (!clientId) {
      console.error("Missing GitHub client ID.");
      return;
    }

    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user:email`;
    window.location.href = githubAuthUrl;
  };

  return (
    <div className="w-3xl h-screen mx-auto border-x flex justify-center items-center">
      <div className="w-full h-[70vh] gap-6 flex flex-col justify-center items-center">
        <div className="max-w-3xl w-3xl border-y mx-auto overflow-hidden">
          <Diveder />
        </div>
        <button
          onClick={handleGitHubLogin}
          className="flex cursor-pointer justify-center items-center hover:opacity-80 transition-opacity ease-in-out shadow-2xs gap-2 p-2 border border-neutral-400 dark:border-neutral-500 rounded-lg"
        >
          <div className="size-10 selection:bg-transparent">
            <img
              src="/github.webp"
              alt="github"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium text-lg">Sign in with GitHub</span>
        </button>

        <p className="text-center text-sm text-red-400">
          Only authorized users are allowed to access this page.
        </p>

        <Link
          href="/"
          className=" px-3 py-1 cursor-pointer group flex justify-center items-center gap-2 font-medium rounded-2xl shadow-inner shadow-neutral-600 dark:shadow-neutral-500 dark:bg-neutral-700 hover:shadow-neutral-500 hover:bg-neutral-700 bg-neutral-800 text-neutral-100"
        >
          <ArrowLeft className=" group-hover:translate-x-1 transition-transform ease-in-out h-4 w-4 shrink-0" />
          <span>Go To Home</span>
        </Link>
        <div className="max-w-3xl w-3xl mx-auto border-y overflow-hidden">
          <Diveder />
        </div>
      </div>
    </div>
  );
}
