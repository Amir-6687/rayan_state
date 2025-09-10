"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface PulseBeamsProps {
  children?: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
  gradientColors?: {
    start: string;
    middle: string;
    end: string;
  };
}

export const PulseBeams = ({
  children,
  className,
  width = 480,
  height = 60,
  gradientColors = {
    start: "#18CCFC",
    middle: "#6344F5",
    end: "#AE48FF",
  },
}: PulseBeamsProps) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-visible",
        className
      )}
      style={{ width, height }}
    >
      {/* Animated SVG Background */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-0"
        style={{ pointerEvents: "none" }}
      >
        {/* Animated Lines */}
        <motion.path
          d="M20 30H460C465.523 30 470 25.523 470 20V40"
          stroke={`url(#gradient1)`}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: 0,
          }}
        />

        <motion.path
          d="M460 30H20C14.477 30 10 34.477 10 40V20"
          stroke={`url(#gradient2)`}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: 0.5,
          }}
        />

        <motion.path
          d="M240 10V50"
          stroke={`url(#gradient3)`}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: 1,
          }}
        />

        {/* Connection Points */}
        <motion.circle
          cx="20"
          cy="30"
          r="3"
          fill={gradientColors.start}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0,
          }}
        />

        <motion.circle
          cx="460"
          cy="30"
          r="3"
          fill={gradientColors.middle}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
        />

        <motion.circle
          cx="240"
          cy="10"
          r="3"
          fill={gradientColors.end}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1,
          }}
        />

        {/* Gradients */}
        <defs>
          <motion.linearGradient
            id="gradient1"
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            animate={{
              x1: ["0%", "100%", "0%"],
              x2: ["100%", "0%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <stop
              offset="0%"
              stopColor={gradientColors.start}
              stopOpacity="0"
            />
            <stop
              offset="50%"
              stopColor={gradientColors.middle}
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor={gradientColors.end}
              stopOpacity="0"
            />
          </motion.linearGradient>

          <motion.linearGradient
            id="gradient2"
            gradientUnits="userSpaceOnUse"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="0%"
            animate={{
              x1: ["100%", "0%", "100%"],
              x2: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: 0.5,
            }}
          >
            <stop offset="0%" stopColor={gradientColors.end} stopOpacity="0" />
            <stop
              offset="50%"
              stopColor={gradientColors.middle}
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor={gradientColors.start}
              stopOpacity="0"
            />
          </motion.linearGradient>

          <motion.linearGradient
            id="gradient3"
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            animate={{
              y1: ["0%", "100%", "0%"],
              y2: ["100%", "0%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: 1,
            }}
          >
            <stop
              offset="0%"
              stopColor={gradientColors.start}
              stopOpacity="0"
            />
            <stop
              offset="50%"
              stopColor={gradientColors.middle}
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor={gradientColors.end}
              stopOpacity="0"
            />
          </motion.linearGradient>
        </defs>
      </svg>

      {/* Button Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
