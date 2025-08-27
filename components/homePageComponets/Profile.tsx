export default function ProfileComponent() {
  return (
    <div className="w-full border-y border-neutral-200/80 dark:border-neutral-800/80 ">
      <div className="max-w-3xl flex justify-center items-center h-[85%] mx-auto border-x border-neutral-200/80 dark:border-neutral-800/80">
        <div className=" h-full w-42 border-r border-neutral-200/80 dark:border-neutral-800/80 flex justify-center items-center ">
          <div className=" size-full rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800 p-0.5 ">
            <img
              src="/me.jpeg"
              className=" h-full w-full rounded-full object-contain "
              alt="mahesha"
            />
          </div>
        </div>
        <div className=" w-full h-full flex-1">
          <div
            className=" hidden md:block relative h-20 -translate-y-3 w-full overflow-hidden border-b border-neutral-200/80 dark:border-neutral-800/80 
    before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-full
    before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] 
    before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          >
            <p className=" flex gap-2 items-center absolute bottom-0 left-4 dark:selection:bg-transparent text-xs mb-1 selection:text-neutral-400 text-neutral-200 dark:text-neutral-700 selection:bg-transparent">
              text-3xl
              <span className=" inline-block dark:hidden ">text-zinc-950</span>
              <span className=" dark:inline-block hidden ">text-zinc-50</span>
              font-medium
            </p>
          </div>

          <div className="h-[30%] w-full border-b border-neutral-200/80 dark:border-neutral-800/80 px-4 flex items-center ">
            <h2 className="text-3xl font-mono font-medium text-zinc-900 dark:text-zinc-50">
              Mahesha BR
            </h2>
          </div>
          {/* <div className="h-[20%] text-neutral-400 font-light w-full px-4 flex items-center ">
            <p>Full Stack Developer</p>
            <p>AIML Developer</p>
            <p>Java Developer</p>
          </div> */}
          <RoleRotator/>
        </div>
      </div>
    </div>
  );
}



export function RoleRotator() {
  return (
    <div className="h-[20%] w-full text-neutral-400 font-light px-4 overflow-hidden">
      <div className="relative h-8 overflow-hidden w-full text-wrap md:w-1/3">
        <div className="animate-roles bg-repeat overflow-hidden w-full h-fit">
          <p className="absolute w-full  rounded mt-1  text-center">Full Stack Developer</p>
          <p className="absolute w-full rounded mt-1 text-center">AIML Developer</p>
          <p className="absolute w-full rounded mt-1 text-center">Java Developer</p>
        </div>
      </div>
    </div>
  );
}
