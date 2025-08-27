import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function AboutComponent() {
  return (
    <div
      id="about"
      className="w-full border-y border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="w-full">
        <div className=" w-full h-12 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div className="w-full md:w-3xl px-4 mx-auto flex items-center h-full border-x border-neutral-200/80 dark:border-neutral-800/80 ">
            <h1 className="text-4xl leading-0 tracking-tight font-semibold ">
              About
            </h1>
          </div>
        </div>
        <div
          className={`md:w-3xl ${ibmPlexMono.variable} w-full border-x tracking-wide border-neutral-200/80 dark:border-neutral-800/80 flex flex-col gap-4 text-neutral-800 dark:text-neutral-200 mx-auto px-4 py-3 `}
        >
          <p>
            Hello, World! I&apos;m Mahesha BR — a Full Stack Developer with a strong
            foundation in both modern JavaScript technologies and Java. I&apos;m
            passionate about crafting high-performance, user-focused software
            that blends intuitive design with robust functionality.
          </p>
          <p>
            My work is driven by a love for clean code, intuitive design, and
            efficient performance. I enjoy turning ideas into real-world
            solutions through both professional projects and personal
            experiments with emerging technologies.
          </p>
          <p>
            Beyond my professional work, I enjoy exploring new technologies and
            bringing ideas to life through personal projects.
          </p>
          {/* <p>
            I'm also the creator of React Wheel Picker — iOS-like wheel picker
            for React with smooth inertia scrolling and infinite loop support.
            It has earned 221 stars on GitHub and was selected for Vercel's Open
            Source Program summer 2025 cohort, receiving $3,600 in Vercel
            platform credits, an OSS Starter Pack, and priority community
            support to fuel its ongoing development.
          </p> */}
          <p>Let&apos;s connect and collaborate!</p>
        </div>
      </div>
    </div>
  );
}
