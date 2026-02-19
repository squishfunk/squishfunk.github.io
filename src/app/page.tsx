import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, FileText, Mail } from 'lucide-react';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <main className="h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-hidden flex flex-col">
      
      {/* Main Grid Container */}
      <div className="border-x border-gray-200 dark:border-white/10 flex-1 flex flex-col max-w-[100vw]">
        
        {/* ROW 1: Header Bar (Unified Component) */}
        <Header />

        {/* ROW 2: Hero Name (Flexible Height) */}
        <div className="border-b border-gray-200 dark:border-white/10 flex-1 flex flex-col justify-center px-4 md:px-6 min-h-[200px] max-h-[40vh] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-[-0.05em] leading-[0.85]">
            Damian<br />
            <span className="ml-12 md:ml-32 italic text-gray-300 dark:text-gray-700">Developer</span>
          </h1>
        </div>

        {/* ROW 3: Main Content Split (Flexible Height) */}
        <div className="grid grid-cols-1 md:grid-cols-4 flex-1 overflow-hidden">
          
          {/* Col 1: Role Label */}
          <div className="p-6 md:p-8 border-b md:border-b-0 border-gray-200 dark:border-white/10 md:border-r hidden md:block hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 sticky top-8">
              Full-Stack Developer
            </span>
          </div>

          {/* Col 2-4: Description & Links */}
          <div className="md:col-span-3 flex flex-col justify-between h-full">
             
             {/* Text Block */}
             <div className="p-6 md:p-12 md:pr-32 flex-1 flex flex-col justify-center overflow-y-auto">
                <div className="flex justify-end mb-8 md:mb-16">
                   <Link href="/#projects" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                     See my work 
                     <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </Link>
                </div>
                
                <h2 className="text-xl md:text-3xl lg:text-4xl leading-relaxed font-light text-gray-800 dark:text-gray-200 max-w-3xl">
                  I build <span className="font-serif italic text-red-600 dark:text-red-500 font-medium">production-ready</span>, performant web applications <span className="font-serif italic text-red-600 dark:text-red-500 font-medium">from the ground up</span>, for real-world use.
                </h2>
             </div>

             {/* Bottom Links Grid (Fixed Height at Bottom) */}
             <div className="grid grid-cols-4 h-16 md:h-20 shrink-0 border-t border-gray-200 dark:border-white/10">
                
                {/* LinkedIn */}
                <a href="#" className="flex items-center justify-center border-r border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                   <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </a>
                
                {/* GitHub */}
                <a href="#" className="flex items-center justify-center border-r border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                   <Github className="w-5 h-5 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>
                
                {/* Mail / Contact */}
                <a href="mailto:contact@example.com" className="flex items-center justify-center border-r border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                   <Mail className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                </a>

                {/* Resume */}
                <a href="#" className="flex items-center justify-center md:justify-between px-2 md:px-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                   <span className="hidden md:inline text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">Resume</span>
                   <FileText className="w-5 h-5 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
