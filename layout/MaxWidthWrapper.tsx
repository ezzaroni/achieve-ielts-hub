import React from "react";
import { cn } from "../lib/utils";

export const MaxWidthWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 md:px-12", className)}>
      {children}
    </div>
  );
};