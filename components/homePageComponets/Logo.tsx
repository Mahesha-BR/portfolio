export default function LogoComponent(){
    return(
        <div className="md:w-3xl mx-auto pt-14 h-70 overflow-hidden flex justify-center items-center">
            <div className="relative max-w-3xl w-3xl h-full">
              <div
                className="aspect-2/1 border-x border-edge select-none sm:aspect-3/1 flex items-center justify-center text-black dark:text-white screen-line-before screen-line-after before:-top-px after:-bottom-px bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
                data-state="closed"
                data-slot="context-menu-trigger"
              >
                <div className="bg-transparent w-full h-full text-black dark:text-white flex justify-center items-center ">
                  <img src="/logo.svg" draggable={false} alt="MBR" className=" flex justify-center items-center size-40 " />
                </div>
              </div>
            </div>
          </div>
    )
}