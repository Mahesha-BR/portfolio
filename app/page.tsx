"use client";
import Footer from "@/components/Footer";
import AboutComponent from "@/components/homePageComponets/About";
import BlogsComponent from "@/components/homePageComponets/Blogs";
import DetailsComponent from "@/components/homePageComponets/Details";
import LogoComponent from "@/components/homePageComponets/Logo";
import ProfileComponent from "@/components/homePageComponets/Profile";
import ProjectsComponent from "@/components/homePageComponets/Projects";
import SocialsComponent from "@/components/homePageComponets/Socials";
import StackComponent from "@/components/homePageComponets/Stack";

export default function Home() {
  return (
    <div className="fixed inset-0 z-[-99]">
      <div className="h-full overflow-x-hidden overflow-y-scroll scroll-smooth">
        <div className="w-full h-fit">
          <LogoComponent />
          <ProfileComponent />
          <Diveder />
          <DetailsComponent />
          <Diveder />
          <SocialsComponent />
          <Diveder />
          <AboutComponent />
          <Diveder />
          <ProjectsComponent />
          <Diveder />
          <StackComponent />
          <Diveder />
          <BlogsComponent />
          <Diveder />
          <Footer />
          <Diveder />
        </div>
      </div>
    </div>
  );
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><path fill="#fff" d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64ZM768 32h32v32h-32zM672 0h96v32h-96zM640 32h32v192h-32zM672 224h96v32h-96zM768 192h32v32h-32zM832 0h32v256h-32zM864 64h96v32h-96zM960 96h32v160h-32zM1056 64h96v32h-96zM1024 96h32v128h-32zM1056 224h64v32h-64zM1120 192h32v32h-32zM1152 64h32v192h-32zM1216 64h32v192h-32zM1248 64h96v32h-96zM1344 96h32v160h-32zM1408 0h32v256h-32zM1440 64h96v32h-96zM1536 96h32v160h-32zM1632 0h64v32h-64zM1696 32h32v32h-32zM1696 192h32v32h-32zM1728 64h32v128h-32zM1632 224h64v32h-64zM1600 0h32v256h-32zM1824 64h96v32h-96zM1792 96h32v128h-32zM1824 224h64v32h-64zM1888 192h32v32h-32zM1920 64h32v192h-32zM1984 64h32v32h-32zM2016 64h32v192h-32zM2016 0h32v32h-32z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="#fff" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg> */
}

export function Diveder() {
  return (
    <div
      className="relative flex h-8 w-full border-x border-neutral-200/80 dark:border-neutral-800/80 before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw] 
            before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
    ></div>
  );
}
