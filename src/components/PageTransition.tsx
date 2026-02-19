"use client";

import { motion } from "framer-motion";
import React from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  // Ostra, brutalistyczna krzywa zwalniania (brak efektu sprężyny)
  const transition = { duration: 0.8, ease: "easeOut" as const };

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(4px)" // Subtelny efekt optyczny rodem z kamer
    },
    enter: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition 
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      className="w-full h-full flex flex-col flex-1"
    >
      {children}
    </motion.div>
  );
}
