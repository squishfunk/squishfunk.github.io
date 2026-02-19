import { BentoCard } from "@/components/ui/BentoCard"

const stack = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Rust", "Docker", "Framer"]

export function Stack() {
  return (
    <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-between" delay={0.1}>
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 p-1 rounded-md">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        </span>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Tech Stack</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-zinc-50 dark:bg-zinc-800/50 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors cursor-default">
            {tech}
          </span>
        ))}
      </div>
    </BentoCard>
  )
}
