"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function IntroSection() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
    return (
        <article className="flex flex-row items-center w-full h-dvh border border-blue-300 mt-4 bg-blue-300">
            <div className="flex flex-row justify-center items-center w-1/2 pl-40">
                <section className="flex flex-col w-full justify-center items-start gap-4">
                    <h1 className="text-2xl font-extrabold cursor-pointer text-white">Q. 나에 대해 소개해주세요.</h1>
                    <div className="text-lg text-white">데이터로 의사결정하며 유저경험을 우선시하는 프론트엔드 웹 개발자 문창용입니다.</div>
                    <h1 className="text-2xl font-extrabold cursor-pointer text-white">Q. 어떤 개발 사고를 가지고 개발하나요.</h1>
                    <div className="text-lg text-white">프론트엔드 개발자로서 웹 페이지 성능과 사용자 데이터를 분석하여, 페이지의 완성도와 사용자 경험을 향상시키는 데 중점을 두고 있습니다.</div>
                    <h1 className="text-2xl font-extrabold cursor-pointer text-white">Q. 나를 표현할 수 있는 키워드를 소개해주세요.</h1>
                    <div className="flex flex-row gap-4">
                        <button className="px-4 py-1 border border-white text-white rounded-md hover:bg-white hover:text-black">#책임감</button>
                        <button className="px-4 py-1 border border-white text-white rounded-md hover:bg-white hover:text-black">#이타적인 행동</button>
                        <button className="px-4 py-1 border border-white text-white rounded-md hover:bg-white hover:text-black">#활발함</button>
                    </div>
                </section>
            </div>
            <div className="flex flex-row justify-center items-center w-1/2">
                <motion.div
                    className="w-[480px] h-[480px] cursor-grab relative border border-[#eee] text-center text-lg font-bold"
                    style={{ x, y, rotateX, rotateY, z: 100 }}
                    drag
                    dragElastic={0.32}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    whileTap={{ cursor: 'grabbing' }}
                >
                    네모 칸을 움직여보세요: 오뚝이 같은 나
                    <div className="absolute w-full h-full flex justify-center items-center">
                        <motion.div
                            className="w-[360px] h-[360px] z-10 user-select-none p-0 pb-[40px]"
                            style={{ x, y, rotateX, rotateY }}
                            drag
                            dragElastic={0.12}
                            whileTap={{ cursor: 'grabbing' }}
                        >
                            <Image
                                className="rounded-lg user-select-none"
                                src="/mypicture.jpg"
                                alt="Changyong"
                                width={360}
                                height={360}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </article>
    )
}