import { BentoCard } from "@/components/ui/BentoCard"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce",
    desc: "Next.js + Stripe",
    href: "#",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "dark:hover:border-blue-500/50 hover:border-blue-500/50"
  },
  {
    id: 2,
    title: "Health App",
    desc: "React Native",
    href: "#",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "dark:hover:border-emerald-500/50 hover:border-emerald-500/50"
  },
  {
    id: 3,
    title: "CLI Tool",
    desc: "Rust & Clap",
    href: "#",
    color: "from-orange-500/20 to-amber-500/20",
    border: "dark:hover:border-orange-500/50 hover:border-orange-500/50"
  }
]

export function Projects() {
  return (
    <>
      <BentoCard className="md:col-span-2 md:row-span-1 flex flex-col justify-between group" delay={0.4}>
        <div className="flex justify-between items-start mb-4">
             <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">Featured</span>
             <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
        </div>
        <div className="mb-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">Portfolio v2</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">The site you are looking at right now. Built with Next.js 16 and Framer Motion.</p>
        </div>
        <div className="h-32 w-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-xl overflow-hidden relative border border-zinc-200 dark:border-zinc-700/50">
            {/* Project Image Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-medium text-sm">Project Preview</div>
        </div>
      </BentoCard>

      {projects.map((p, i) => (
        <BentoCard key={p.id} className={`md:col-span-1 md:row-span-1 group transition-colors ${p.border}`} delay={0.5 + (i * 0.1)}>
           <Link href={p.href} className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center shadow-inner`}>
                    <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">0{p.id}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{p.desc}</p>
              </div>
           </Link>
        </BentoCard>
      ))}
    </>
  )
}
