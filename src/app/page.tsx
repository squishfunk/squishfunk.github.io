import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ArrowUpRight, Github, Linkedin, FileText, Mail } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      
      {/* Main Grid Container */}
      <div className="border-x border-gray-200 dark:border-white/10 min-h-screen flex flex-col max-w-[100vw] overflow-x-hidden">
        
        {/* ROW 1: Header Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 dark:border-white/10">
          
          {/* Availability Badge */}
          <div className="p-4 md:p-6 flex items-center gap-3 border-b md:border-b-0 border-gray-200 dark:border-white/10 md:border-r">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Availability: Open to work
            </span>
          </div>

          {/* Sitemap / Nav */}
          <div className="p-4 md:p-6 flex items-center justify-between md:justify-end gap-6 text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <nav className="hidden md:flex gap-6">
              <Link href="/#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link>
              <Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">Blog</Link>
              <Link href="/#about" className="hover:text-black dark:hover:text-white transition-colors">About</Link>
              <Link href="/#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center gap-3 border-l border-gray-200 dark:border-white/10 pl-6 ml-6 h-full">
               <span className="hidden md:inline">Theme</span>
               <ThemeToggle />
            </div>
          </div>
        </div>

        {/* ROW 2: Hero Name */}
        <div className="border-b border-gray-200 dark:border-white/10 py-24 md:py-32 px-4 md:px-6">
          <h1 className="font-serif text-6xl md:text-9xl font-medium tracking-tighter leading-[0.9]">
            Damian<br />
            <span className="ml-12 md:ml-32 italic text-gray-300 dark:text-gray-700">Developer</span>
          </h1>
        </div>

        {/* ROW 3: Main Content Split */}
        <div className="grid grid-cols-1 md:grid-cols-4 flex-1">
          
          {/* Col 1: Role Label */}
          <div className="p-6 md:p-8 border-b md:border-b-0 border-gray-200 dark:border-white/10 md:border-r">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 sticky top-8">
              Full-Stack Developer
            </span>
          </div>

          {/* Col 2-4: Description & Links */}
          <div className="md:col-span-3 flex flex-col justify-between">
             
             {/* Text Block */}
             <div className="p-6 md:p-12 md:pr-32 border-b border-gray-200 dark:border-white/10">
                <div className="flex justify-end mb-16">
                   <Link href="/#projects" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                     See my work 
                     <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </Link>
                </div>
                
                <h2 className="text-2xl md:text-4xl leading-relaxed font-light text-gray-800 dark:text-gray-200 max-w-3xl">
                  I build <span className="font-serif italic text-red-600 dark:text-red-500 font-medium">production-ready</span>, performant web applications <span className="font-serif italic text-red-600 dark:text-red-500 font-medium">from the ground up</span>, for real-world use, with strong backend logic and carefully crafted user interfaces.
                </h2>
             </div>

             {/* Bottom Links Grid */}
             <div className="grid grid-cols-2 md:grid-cols-4 min-h-[100px]">
                
                {/* LinkedIn */}
                <a href="#" className="flex items-center justify-center border-r border-b md:border-b-0 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group py-6 md:py-0">
                   <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </a>
                
                {/* GitHub */}
                <a href="#" className="flex items-center justify-center border-r border-b md:border-b-0 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group py-6 md:py-0">
                   <Github className="w-6 h-6 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>
                
                {/* Mail / Contact */}
                <a href="mailto:contact@example.com" className="flex items-center justify-center border-r border-b md:border-b-0 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group py-6 md:py-0">
                   <Mail className="w-6 h-6 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                </a>

                {/* Resume */}
                <a href="#" className="flex items-center justify-between px-6 border-b md:border-b-0 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group py-6 md:py-0">
                   <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">Resume / CV</span>
                   <FileText className="w-5 h-5 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>
             </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
