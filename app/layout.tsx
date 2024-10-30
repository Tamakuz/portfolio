import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/reusable/navbar/navbar";
import { cn } from "@/lib/utils";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "Jovan Tama | %s",
    default: "Jovan Tama | Full Stack Developer",
  },
  description:
    "A seasoned full stack developer with a passion for creating engaging and interactive websites.",
  metadataBase: new URL("https://jovantama.my.id"),
  openGraph: {
    title: {
      template: "Jovan Tama | %s",
      default: "Jovan Tama | Full Stack Developer",
    },
    description:
      "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
    url: "https://jovantama.my.id",
    siteName: "Jovan Tama",
    images: [
      {
        url: "/public/foto.jpg",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Jovan Tama",
    "Jovan",
    "Tama",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "frontend web developer",
    "frontend developer",
    "frontend engineer",
    "react",
    "nextjs",
    "creative",
    "creative developer",
    "creative frontend developer",
    "web developer",
    "web engineer",
    "tech",
    "indonesia",
    "indonesian",
    "indonesian developer",
    "indonesian web developer",
    "indonesian frontend developer",
    "indonesian web engineer",
    "indonesian frontend engineer",
    "indonesian creative developer",
    "portfolio",
    "portfolio website",
    "portfolio web",
    "portfolio web developer",
    "portfolio frontend developer",
    "portfolio web engineer",
    "portfolio frontend engineer",
    "portfolio creative developer",
    "portfolio creative frontend developer",
    "portfolio creative web developer",
    "portfolio creative web engineer",
    "portfolio creative frontend engineer",
    "portfolio creative web developer",
    "portfolio creative web developer",
    "software engineer",
    "full stack engineer",
    "javascript developer",
    "typescript developer",
    "web application developer",
    "UI/UX developer",
    "UI/UX engineer",
    "frontend architect",
    "backend architect",
    "full stack architect",
    "web architect",
    "software architect",
    "programmer",
    "coder",
    "web programmer",
    "web coder",
    "tech enthusiast",
    "technology",
    "web technology",
    "web design",
    "web development",
    "web solutions",
    "web services",
    "web applications",
    "web projects",
    "web portfolio",
    "developer portfolio",
    "engineer portfolio",
    "software portfolio",
    "tech portfolio",
    "indonesian tech",
    "indonesian technology",
    "indonesian software",
    "indonesian web",
    "indonesian frontend",
    "indonesian backend",
    "indonesian full stack",
    "indonesian coder",
    "indonesian programmer",
    "indonesian engineer",
    "indonesian architect",
    "indonesian UI/UX",
    "indonesian web design",
    "indonesian web development",
    "indonesian web solutions",
    "indonesian web services",
    "indonesian web applications",
    "indonesian web projects",
    "indonesian web portfolio",
    "indonesian developer portfolio",
    "indonesian engineer portfolio",
    "indonesian software portfolio",
    "indonesian tech portfolio",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Jovan Tama | Full Stack Developer",
    description:
      "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
    images: ["/public/foto.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "dark:bg-neutral-950 bg-neutral-50 overflow-x-hidden",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
