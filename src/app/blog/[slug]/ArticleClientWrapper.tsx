"use client";

import { motion } from "framer-motion";

export function ArticleClientWrapper({ htmlContent }: { htmlContent: string }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
      className="prose prose-lg prose-gray dark:prose-invert max-w-3xl prose-headings:font-serif prose-headings:font-medium prose-p:font-light prose-p:leading-relaxed prose-a:text-blue-600 dark:prose-a:text-blue-400"
    >
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </motion.article>
  );
}
