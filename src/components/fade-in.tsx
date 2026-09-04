"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

const viewport = { once: true, margin: "-100px" } as const;

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function FadeIn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, viewport);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? "show" : "hidden"}
      animate={reduce || inView ? "show" : "hidden"}
      variants={reveal}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  as: Tag = "ul",
}: {
  children: ReactNode;
  className?: string;
  as?: "ul" | "ol" | "div";
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, viewport);
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduce ? "show" : "hidden"}
      animate={reduce || inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.li
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 400, damping: 30 },
        },
      }}
    >
      {children}
    </motion.li>
  );
}
