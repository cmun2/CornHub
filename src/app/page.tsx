"use client";
import { useRef } from "react"
import Image from "next/image";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor"

// interface CustomCursorProps {
//   stickyElement: React.RefObject<HTMLElement | null>;
// }

export default function Home() {
  // const stickyElement = useRef<HTMLHeadingElement | null>(null);
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="flex min-h-screen flex-col justify-between bg-white cursor-none">
        <header className="relative px-20 pt-8 h-[80vh]">
          <div className="relative h-full w-full max-w-screen-2xl mx-auto">
            <div className="relative w-[12rem]">
                <Image className="rounded-full" src="/profile.png" alt="Changyong" width={120} height={120} />
              <h1 className="text-2xl font-extrabold mt-4">Chang Yong Mun</h1>
              <p className="text-lg text-gray-400">Frontend Developer</p>
            </div>
          </div>
        </header>
        <section className="flex flex-col items-center w-full h-dvh border border-blue-300 mt-4 bg-blue-300">
          <h1 className="text-2xl font-extrabold cursor-pointer">Introduction</h1>
        </section>
        <button>Button</button>
        <section className="flex flex-col items-center w-full h-dvh border border-blue-300 mt-4 bg-blue-300">
          <h1 className="text-2xl font-extrabold">Career</h1>
        </section>

        {/* Keyword Horizontal Scroll */}
        <section className="flex flex-col items-center w-full h-dvh border border-blue-300 mt-4 bg-blue-300">
          <h1 className="text-2xl font-extrabold">My Keyword</h1>
          <ul>
            <li>Developer</li>
            <li>Responsibility</li>
            <li>Execution Power</li>
            <li>Cooperation</li>
            <li>Language</li>
          </ul>
        </section>
        <section className="flex flex-col items-center w-full h-dvh border border-blue-300 mt-4 bg-blue-300">
          <h1 className="text-2xl font-extrabold">Study</h1>
        </section>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-4">
          <h2 className="text-2xl font-extrabold">Contact</h2>
        </footer>
      </main>
      </>
  );
}
