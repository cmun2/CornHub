import { useEffect, useState, useRef, useMemo } from "react";

const ProgressComponents = () => {
    const [scrollValue, setScrollValue] = useState(0);

    const refContainer = useRef<HTMLDivElement>(null);
    const refProgressBar = useRef<HTMLDivElement>(null);

    // 스크롤 값 계산
    const calcScrollValue = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollValue((winScroll / height) * 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", calcScrollValue);
        return () => {
            window.removeEventListener("scroll", calcScrollValue);
        };
    }, []);

    useEffect(() => {
        // 각 색상 채널의 값 계산 (선형 보간)
        const rStart = 155, gStart = 188, bStart = 242;  // #9bbcf2
        const rEnd = 18, gEnd = 101, bEnd = 238; // #1265ee

        const r = rStart + (rEnd - rStart) * (scrollValue / 100);
        const g = gStart + (gEnd - gStart) * (scrollValue / 100);
        const b = bStart + (bEnd - bStart) * (scrollValue / 100);

        // 새로운 색상 계산
        const color = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

        if (refProgressBar.current) {
            refProgressBar.current.style.backgroundColor = color;

            // 처음에는 원형, 이후에는 타원형으로 변화
            const heightValue = Math.max(16, scrollValue);

            // height만 스크롤 비율에 맞게 변화 (타원형으로)
            refProgressBar.current.style.height = `${heightValue}%`;
        }
    }, [scrollValue]);


    return (
        <article id="progress" ref={refContainer} className="fixed right-10 top-10 w-1 h-60 flex justify-start items-center flex-col gap-8 z-[111] text-uppercase">
            <p className="text-[#28bedf40] text-sm transform cursor-pointer">Start</p>
            <div className="relative w-4 h-[50%] bg-[#28bedf40] flex items-start rounded-full">
                <div ref={refProgressBar} className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#ff6347] w-4 h-[1%] rounded-full"></div>
            </div>
            <p className="text-[#0b0ea940] text-sm transform cursor-pointer">End</p>
        </article>
    );
};

export default ProgressComponents;
