import React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : undefined}
      className={cn(
        "rounded-[2rem] p-8 overflow-hidden relative",
        className
      )}
    >
      {children}
    </motion.div>
  );
};