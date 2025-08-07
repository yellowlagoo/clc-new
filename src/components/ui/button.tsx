import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const buttonVariants = {
  primary: "text-white",
  secondary: "bg-transparent hover:bg-slate-50 text-slate-900 border border-slate-200",
};

const buttonSizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        "hover:scale-[1.02]",
        variant === "primary" && "bg-[#6F4D6CFF] hover:bg-[#6F4D6CFF]/90 focus-visible:ring-[#6F4D6CFF]",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 