import { BentoCard } from "@/components/ui/BentoCard"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Socials() {
  return (
    <BentoCard className="md:col-span-1 md:row-span-1" delay={0.2}>
       <div className="flex items-center gap-2 mb-6">
        <span className="bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 p-1 rounded-md">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </span>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Connect</h3>
       </div>
       <div className="grid grid-cols-2 gap-3">
         <a href="#" className="flex items-center gap-2 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-600 group">
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">GitHub</span>
         </a>
         <a href="#" className="flex items-center gap-2 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-600 group">
            <Linkedin className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">LinkedIn</span>
         </a>
         <a href="#" className="flex items-center gap-2 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-600 group">
            <Twitter className="w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">X</span>
         </a>
          <a href="mailto:contact@example.com" className="flex items-center gap-2 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-600 group">
            <Mail className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Email</span>
         </a>
       </div>
    </BentoCard>
  )
}
