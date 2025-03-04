import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Changyong's Portfolio World",
  description: "Introducing my code of conduct in coding",
  authors: { name: "changyong", url: "https://github.com/cmun2" },
  keywords: ["portfolio", "cmun2", "changyong", "web developer", "front-end developer"],
  openGraph: {
    type: "website",
    url: "",
    siteName: "Changyong's Portfolio World",
    title: "Changyong's Portfolio World",
    description: "Introducing my code of conduct in coding",
    images: [
      {
        url: "",
        width: 1920,
        height: 1080,
        alt: "changyong",
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
