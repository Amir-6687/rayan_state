"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface TimelineContentProps {
  as?: React.ElementType;
  children: React.ReactNode;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement>;
  customVariants: any;
  className?: string;
  [key: string]: any;
}

export function TimelineContent({
  as: Component = "div",
  children,
  animationNum,
  timelineRef,
  customVariants,
  className,
  ...props
}: TimelineContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={elementRef}
      as={Component}
      custom={animationNum}
      variants={customVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
