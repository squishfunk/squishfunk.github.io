import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { Header } from '@/components/Header';
import { BlogListClientWrapper, BlogListItemClientWrapper } from './BlogListClientWrapper';

export default function Blog() {
  const allPosts = getSortedPostsData();

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
       <div className="border-x border-gray-200 dark:border-white/10 min-h-screen flex flex-col max-w-[100vw]">
          
          {/* Header Row (Unified Component) */}
          <Header leftContent={
             <>
               <span className="relative flex h-2 w-2 shrink-0">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <Link href="/" className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors truncate">
                  squishfunk / Portfolio
                </Link>
             </>
          } />

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
             <BlogListClientWrapper>
                {allPosts.map((post: any) => (
                   <BlogListItemClientWrapper key={post.id} href={`/blog/${post.id}`}>
                      <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4 gap-2">
                         <h2 className="text-2xl md:text-3xl font-serif font-medium group-hover:text-red-600 transition-colors">{post.title}</h2>
                         <span className="text-xs font-mono text-gray-500 dark:text-gray-400 shrink-0">{post.date}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl font-light">{post.excerpt}</p>
                      <div className="mt-6 flex items-center text-xs font-mono uppercase tracking-widest text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                        Read Article -&gt;
                      </div>
                   </BlogListItemClientWrapper>
                ))}
             </BlogListClientWrapper>
          </div>
       </div>
    </main>
  );
}
