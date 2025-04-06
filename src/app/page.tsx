"use client";
import { Fragment, useRef } from "react"
import Image from "next/image";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor"
import IntroSection from "@/components/sections/IntroSection";
import CareerSection from "@/components/sections/CareerSection";
import KeyWordSection from "@/components/sections/KeywordSection";
import ProjectSection from "@/components/sections/ProjectSection";
import StudySection from "@/components/sections/StudySection";
import Footer from "@/components/sections/Footer";


// interface CustomCursorProps {
//   stickyElement: React.RefObject<HTMLElement | null>;
// }

export default function Home() {
  // const stickyElement = useRef<HTMLHeadingElement | null>(null);
  return (
    <Fragment>
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
        <IntroSection />
        <button>Button</button>
        <CareerSection />

        {/* Keyword Horizontal Scroll */}
        <KeyWordSection />
        <ProjectSection />
        <StudySection />
        <Footer />
      </main>
      </Fragment>
  );
}
