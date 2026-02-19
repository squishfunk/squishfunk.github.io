"use client";

import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, FileText, Mail } from 'lucide-react';
import { Header } from '@/components/Header';
import { motion } from 'framer-motion';

// Define cinematic transitions
const transition = { duration: 1, ease: "easeOut" as const };

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const borderRevealY = {
  hidden: { height: 0, opacity: 0 },
  show: { height: "100%", opacity: 1, transition: { duration: 1.5, ease: "easeOut" as const } }
};

const textReveal = {
  hidden: { y: "120%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition }
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition }
};

export default function Home() {
  return (
    <main className="h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden flex flex-col">
      
      {/* Main Grid Container */}
      <div className="border-x border-gray-200 dark:border-white/10 flex-1 flex flex-col max-w-[100vw]">
        
        {/* ROW 1: Header Bar (Unified Component) */}
        <Header />

        {/* CONTAINER FOR THE REST OF THE GRID (Staggered Animation) */}
        <motion.div 
          className="flex-1 flex flex-col overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >

          {/* ROW 2: Hero Name (Cinematic Reveal) */}
          <div className="border-b border-gray-200 dark:border-white/10 flex-1 flex flex-col justify-center px-4 md:px-6 min-h-[300px] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300">
            <h1 className="font-serif text-[clamp(4rem,10vw,12rem)] font-medium tracking-[-0.05em] leading-[0.85] flex flex-col">
              {/* Word 1 inside mask */}
              <span className="overflow-hidden inline-block pb-6 md:pb-8">
                <motion.span variants={textReveal} className="inline-block">
                  squishfunk
                </motion.span>
              </span>
              {/* Word 2 inside mask with offset */}
              <span className="overflow-hidden inline-block pb-8 md:pb-12">
                <motion.span variants={textReveal} className="ml-8 md:ml-32 italic text-gray-300 dark:text-gray-700 inline-block max-w-[90vw] text-wrap text-[clamp(2.5rem,6vw,7rem)]">
                  Backend/AI Agent Developer
                </motion.span>
              </span>
            </h1>
          </div>

          {/* ROW 3: Main Content Split */}
          <div className="grid grid-cols-1 md:grid-cols-4 flex-1 overflow-hidden">
            
            {/* Col 1: Role Label */}
            <motion.div 
              variants={fadeUp}
              className="p-6 md:p-8 border-b md:border-b-0 border-gray-200 dark:border-white/10 md:border-r hidden md:block hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 sticky top-8 block">
                Backend / AI Engineer
              </span>
            </motion.div>

            {/* Col 2-4: Description & Links */}
            <div className="md:col-span-3 flex flex-col justify-between h-full">
               
               {/* Text Block */}
               <motion.div 
                 variants={fadeUp}
                 className="p-6 md:p-12 md:pr-32 flex-1 flex flex-col justify-center overflow-y-auto"
               >
                  <div className="flex justify-end mb-8 md:mb-16">
                     <Link href="/#projects" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                       See my work 
                       <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </Link>
                  </div>
                  
                  <h2 className="text-xl md:text-3xl lg:text-4xl leading-relaxed font-light text-gray-800 dark:text-gray-200 max-w-4xl">
                    Architecting <span className="font-serif italic text-red-600 dark:text-red-500 font-medium">resilient</span> backend systems and autonomous AI agents. No boilerplate, just production-grade logic built <span className="font-serif italic text-red-600 dark:text-red-500 font-medium">from the ground up</span>.
                  </h2>
               </motion.div>

               {/* Bottom Links Grid (Cascading cell animation) */}
               <motion.div 
                 variants={containerVariants}
                 className="grid grid-cols-4 h-16 md:h-20 shrink-0 border-t border-gray-200 dark:border-white/10"
               >
                  {/* LinkedIn */}
                  <motion.a variants={fadeUp} href="#" className="flex items-center justify-center border-r border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                     <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </motion.a>
                  
                  {/* GitHub */}
                  <motion.a variants={fadeUp} href="#" className="flex items-center justify-center border-r border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                     <Github className="w-5 h-5 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </motion.a>
                  
                  {/* Mail / Contact */}
                  <motion.a variants={fadeUp} href="mailto:contact@example.com" className="flex items-center justify-center border-r border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                     <Mail className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                  </motion.a>

                  {/* Resume */}
                  <motion.a variants={fadeUp} href="#" className="flex items-center justify-center md:justify-between px-2 md:px-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                     <span className="hidden md:inline text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">Resume</span>
                     <FileText className="w-5 h-5 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </motion.a>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
