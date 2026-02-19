import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Blog() {
  const allPosts = getSortedPostsData();

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
       <div className="border-x border-gray-200 dark:border-white/10 min-h-screen flex flex-col max-w-[100vw]">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 dark:border-white/10 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50">
             <div className="p-4 md:p-6 flex items-center gap-3 border-b md:border-b-0 border-gray-200 dark:border-white/10 md:border-r">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <Link href="/" className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Damian / Portfolio
                </Link>
             </div>
             <div className="p-4 md:p-6 flex items-center justify-between md:justify-end gap-6 text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                <nav className="hidden md:flex gap-6">
                  <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
                  <Link href="/#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link>
                  <Link href="/#about" className="hover:text-black dark:hover:text-white transition-colors">About</Link>
                </nav>
                <div className="flex items-center gap-3 border-l border-gray-200 dark:border-white/10 pl-6 ml-6 h-full">
                   <ThemeToggle />
                </div>
             </div>
          </div>

          {/* Title Row */}
          <div className="border-b border-gray-200 dark:border-white/10 py-16 md:py-24 px-6 md:px-12">
             <h1 className="font-serif text-6xl md:text-8xl font-medium tracking-tighter">Blog</h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 flex-1">
             <div className="p-6 md:p-8 border-b md:border-b-0 border-r border-gray-200 dark:border-white/10 hidden md:block">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 sticky top-24">
                   Latest Posts
                </span>
             </div>
             <div className="md:col-span-3">
                {allPosts.map((post: any) => (
                   <Link key={post.id} href={`/blog/${post.id}`} className="block p-8 md:p-12 border-b border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                      <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4 gap-2">
                         <h2 className="text-2xl md:text-3xl font-serif font-medium group-hover:text-red-600 transition-colors">{post.title}</h2>
                         <span className="text-xs font-mono text-gray-500 dark:text-gray-400 shrink-0">{post.date}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl font-light">{post.excerpt}</p>
                      <div className="mt-6 flex items-center text-xs font-mono uppercase tracking-widest text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                        Read Article -&gt;
                      </div>
                   </Link>
                ))}
             </div>
          </div>
       </div>
    </main>
  );
}
