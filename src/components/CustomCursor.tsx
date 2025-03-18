"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, animate, transform } from "framer-motion";

interface CustomCursorProps {}

const CustomCursor = ({}: CustomCursorProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const cursorRef = useRef(null);
  const cursorSize = isHovered ? 100 : 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const [rotateValue, setRotateValue] = useState(0);

  // 마우스 값 부드럽게 만들기
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };
  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const rotate = (distance: { x: number; y: number }) => {
    const angle = Math.atan2(distance.y, distance.x);
    setRotateValue(angle);
    // 로직수정예정: animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const distance = { x: clientX, y: clientY };

    if (isHovered) {
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, 200], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, 200], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      rotate(distance);

      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const template = ({ rotate, scaleX, scaleY }: { rotate: string; scaleX: number; scaleY: number }) => {
    return `rotate(${rotateValue}rad) scaleX(${scaleX}) scaleY(${scaleY})`; 
    // 로직수정예정: return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
    animate(cursorRef.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1, type: "spring" });
  };

  useEffect(() => {
    // 모든 cursor: pointer 요소를 찾아서 이벤트 추가
    const pointerElements = document.querySelectorAll<HTMLElement>("[style*='cursor: pointer'], button, a, p, h1");
    pointerElements.forEach((el) => {
      el.addEventListener("mouseenter", manageMouseOver);
      el.addEventListener("mouseleave", manageMouseLeave);
    });

    // 커서 위치 갱신
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      pointerElements.forEach((el) => {
        el.removeEventListener("mouseenter", manageMouseOver);
        el.removeEventListener("mouseleave", manageMouseLeave);
      });
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered]);

  return (
    <motion.div
      ref={cursorRef}
      transformTemplate={template}
      className="w-[20px] h-[20px] rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mix-blend-multiply pointer-events-none fixed z-[50]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isHovered ? 0.5 : isHidden ? 0 : 1,
        width: cursorSize,
        height: cursorSize,
        scaleX: scale.x.get(),
        scaleY: scale.y.get(),
      }}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
    />
  );
};

export default CustomCursor;