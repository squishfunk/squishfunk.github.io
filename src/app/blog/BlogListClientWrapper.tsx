"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import React from 'react';

export function BlogListClientWrapper({ children }: { children: React.ReactNode }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="md:col-span-3"
    >
      {children}
    </motion.div>
  );
}

export function BlogListItemClientWrapper({ children, href }: { children: React.ReactNode, href: string }) {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <motion.div variants={itemVariants}>
      <Link href={href} className="block p-8 md:p-12 border-b border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
        {children}
      </Link>
    </motion.div>
  );
}
