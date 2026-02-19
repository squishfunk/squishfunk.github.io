import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "Scalable sales platform with Stripe integration.",
    gradient: "from-blue-100 to-indigo-100",
    size: "large", // spans 2 cols
    href: "#"
  },
  {
    id: 2,
    title: "Health Tracker",
    category: "Mobile App",
    description: "Health monitoring app in React Native.",
    gradient: "from-emerald-100 to-green-100",
    size: "small",
    href: "#"
  },
  {
    id: 3,
    title: "CLI Assistant",
    category: "Dev Tool",
    description: "CLI tool written in Rust.",
    gradient: "from-orange-100 to-amber-100",
    size: "small",
    href: "#"
  },
  {
    id: 4,
    title: "Portfolio 2024",
    category: "Design",
    description: "Minimalist portfolio in Apple style.",
    gradient: "from-gray-100 to-slate-200",
    size: "medium", // vertical
    href: "#"
  }
];

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Selected Projects.</h2>
        <p className="text-xl text-gray-500 font-medium">What I've been working on lately.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
        {projects.map((project) => (
          <Link 
            key={project.id}
            href={project.href}
            className={`
              group relative overflow-hidden rounded-[30px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1
              ${project.size === 'large' ? 'md:col-span-2' : ''}
              ${project.size === 'medium' ? 'lg:row-span-2 lg:h-full' : ''}
            `}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 transition-opacity group-hover:opacity-60`} />
            
            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <div className="transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/80 backdrop-blur-sm text-gray-600 shadow-sm">
                    {project.category}
                  </span>
                  <div className="bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">{project.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">{project.description}</p>
              </div>
              
              {/* Mockup/Image Placeholder Area */}
              <div className="mt-auto relative h-48 w-full rounded-t-xl bg-white shadow-xl transform translate-y-12 transition-transform duration-500 group-hover:translate-y-6 group-hover:scale-[1.02]">
                 <div className="w-full h-full bg-gray-50 rounded-t-xl flex items-center justify-center text-gray-300">
                    {/* Image goes here */}
                    <span className="text-sm font-medium">Project Preview</span>
                 </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
