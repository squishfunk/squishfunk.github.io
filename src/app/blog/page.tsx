import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Blog() {
  const allPosts = getSortedPostsData();

  return (
    <main className="min-h-screen bg-[#fbfbfd] dark:bg-black transition-colors duration-300">
      <Navbar />
      
      <div className="py-32 px-6 max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Blog.</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">Thoughts, tutorials, and insights.</p>
        </div>

        <div className="grid gap-8">
          {allPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="block group p-8 bg-white dark:bg-zinc-900 rounded-[30px] border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-400">{post.date}</span>
                {post.tags && (
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-50 dark:bg-zinc-800 text-xs font-semibold text-gray-600 dark:text-gray-300 rounded-full uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                Read article 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
