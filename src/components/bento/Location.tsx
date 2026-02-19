import { BentoCard } from "@/components/ui/BentoCard"
import { MapPin } from "lucide-react"

export function Location() {
  return (
    <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-center items-center relative min-h-[160px]" delay={0.3}>
      {/* Abstract Map Background - CSS Gradient/Pattern */}
      <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/30 opacity-50 dark:opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)', backgroundSize: '20px 20px' }} 
      />
      
      <div className="relative z-10 flex flex-col items-center gap-3">
         <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shadow-sm relative">
             {/* Pulse effect */}
            <span className="absolute w-full h-full rounded-full bg-blue-400/30 animate-ping opacity-75"></span>
            <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 relative z-10" />
         </div>
         <div className="text-center">
            <p className="text-xs font-semibold uppercase text-zinc-400 tracking-widest">Based in</p>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Poland</h3>
         </div>
      </div>
    </BentoCard>
  )
}
