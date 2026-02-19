import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import React from 'react';

interface HeaderProps {
  leftContent?: React.ReactNode;
}

export function Header({ leftContent }: HeaderProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 dark:border-white/10 shrink-0 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50">
      
      {/* Left Column: Status Badge or Back link (Hidden on Mobile) */}
      <div className="hidden md:flex px-4 md:px-6 items-center gap-3 border-b md:border-b-0 border-gray-200 dark:border-white/10 md:border-r h-16 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300">
        {leftContent || (
          <>
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 truncate">
              Availability: Open to work
            </span>
          </>
        )}
      </div>

      {/* Right Column: Sitemap (Links) + Theme Toggle */}
      <div className="px-4 md:px-6 flex items-center justify-between gap-4 text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 h-16 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300 overflow-hidden">
        
        {/* Mobile Navigation with horizontal scrolling */}
        <nav className="flex items-center gap-4 md:gap-6 overflow-x-auto whitespace-nowrap flex-1 md:flex-initial md:justify-end [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-4">
          <Link href="/" className="hover:text-black dark:hover:text-white transition-colors shrink-0">Home</Link>
          <Link href="/#projects" className="hover:text-black dark:hover:text-white transition-colors shrink-0">Projects</Link>
          <Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors shrink-0">Blog</Link>
          <Link href="/#about" className="hover:text-black dark:hover:text-white transition-colors shrink-0">About</Link>
          <Link href="/#contact" className="hover:text-black dark:hover:text-white transition-colors shrink-0">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-3 border-l border-gray-200 dark:border-white/10 pl-4 md:pl-6 shrink-0 h-full">
           <span className="hidden md:inline">Theme</span>
           <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
