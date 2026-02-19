"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface BentoCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className={cn(
        "bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 overflow-hidden relative shadow-sm hover:shadow-xl dark:shadow-none dark:hover:bg-zinc-900 transition-all duration-300 backdrop-blur-sm group",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
