import * as React from "react";
import { cn } from "@/utils/lib/utils";
import { Diveder } from "@/app/page";

export const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),

  
code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
  // detect if it's a block of code (inside pre) or inline
  if (String(children).includes("\n")) {
    return (
      <pre className="w-full overflow-x-auto bg-neutral-100 dark:bg-neutral-900 rounded-lg bg-muted p-4">
        <code
          className={cn(
            "font-mono text-sm leading-relaxed",
            className
          )}
          {...props}
        >
          {children}
        </code>
      </pre>
    )
  }

  // inline code
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
},
  Diveder,
  //   Alert,
  //   AlertTitle,
  //   AlertDescription,
  //   Card,
  //   CardContent,
};
