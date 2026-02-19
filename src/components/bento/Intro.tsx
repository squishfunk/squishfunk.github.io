import { BentoCard } from "@/components/ui/BentoCard"

export function Intro() {
  return (
    <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 overflow-hidden relative flex items-center justify-center border-4 border-white dark:border-zinc-800 shadow-sm">
          <span className="text-4xl">👨‍💻</span>
        </div>
        <div>
           <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Damian</h1>
           <p className="text-zinc-500 dark:text-zinc-400 font-medium">Full Stack Developer</p>
        </div>
      </div>
      <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg">
        I build accessible, pixel-perfect, and performant web experiences.
        <br /><br />
        Passionate about <span className="text-blue-600 dark:text-blue-400 font-bold">React</span>, <span className="text-blue-600 dark:text-blue-400 font-bold">Design Systems</span>, and <span className="text-blue-600 dark:text-blue-400 font-bold">Open Source</span>.
      </p>
    </BentoCard>
  )
}
