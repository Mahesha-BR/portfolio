import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  fallback: ["system-ui", "Helvetica", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Mahesha - Developer",
  description:
    "Explore Mahesha's software developer portfolio — showcasing modern web projects, technical skills, open-source contributions, and a passion for building impactful digital experiences.",
  keywords: [
    "Mahesha Portfolio",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "Open Source",
  ],
  icons: {
    icon: "/me.jpeg",
    shortcut: "/me.jpeg",
    apple: "/me.jpeg",
  },
  authors: [{ name: "Mahesha" }],
  creator: "Mahesha",
  openGraph: {
    title: "Mahesha | Developer Portfolio",
    description:
      "Discover Mahesha's portfolio, projects, and tech journey. Specialized in React, Next.js, Node.js, and modern web development.",
    url: "https://www.mahesha.dev",
    siteName: "Mahesha Portfolio",
    type: "website",
    
    images: [
      {
        url: "https://www.mahesha.dev/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Mahesha Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesha | Full-Stack Software Developer",
    description:
      "Building modern web apps with passion. Explore Mahesha's dev portfolio.",
    images: ["https://www.mahesha.dev/me.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="8gbSvzl3sJHckpYiPgiq-CH_z2NMTjqlJRKXIUw9_rw" />
      </head>
      <body
        className={` ${inter.className} selection:bg-black selection:text-white dark:selection:bg-neutral-50 dark:selection:text-black antialiased scroll-smooth`}
      >
        <Toaster/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="w-full scroll-smooth">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
