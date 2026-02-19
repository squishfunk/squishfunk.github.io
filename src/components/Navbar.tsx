'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl tracking-tighter text-gray-900 dark:text-white">
              Damian.
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Home</Link>
            <Link href="/#projects" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Projects</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Blog</Link>
            <Link href="/#about" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">About</Link>
            
            <ThemeToggle />
            
            <Link href="/#contact" className="px-4 py-2 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10">Home</Link>
            <Link href="/#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10">Projects</Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10">Blog</Link>
            <Link href="/#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10">About</Link>
            <Link href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
