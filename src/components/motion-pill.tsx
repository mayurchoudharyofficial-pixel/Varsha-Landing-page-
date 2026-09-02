"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

export function MotionPill({
  href,
  children,
  className,
  target,
  rel,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={spring}
    >
      {children}
    </motion.a>
  );
}

export function MotionCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4 }}
      transition={spring}
    >
      {children}
    </motion.div>
  );
}
