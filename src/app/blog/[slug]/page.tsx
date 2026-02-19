import { getAllPostIds, getPostData } from '@/lib/posts';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { ArrowLeft } from 'lucide-react';
import { ArticleClientWrapper } from './ArticleClientWrapper';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
       <div className="border-x border-gray-200 dark:border-white/10 min-h-screen flex flex-col max-w-[100vw]">
          
          {/* Header Row (Zunifikowany Komponent) */}
          <Header leftContent={
             <Link href="/blog" className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group truncate">
               <ArrowLeft className="w-4 h-4 shrink-0 group-hover:-translate-x-1 transition-transform" />
               Back to Blog
             </Link>
          } />

          {/* Title Row */}
          <div className="border-b border-gray-200 dark:border-white/10 py-16 md:py-24 px-6 md:px-12">
             <div className="flex flex-col gap-4 max-w-5xl">
                <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                   <time>{postData.date}</time>
                   {postData.tags && (
                      <div className="flex gap-2">
                         {postData.tags.map((tag: string) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded-sm text-black dark:text-white">{tag}</span>
                         ))}
                      </div>
                   )}
                </div>
                <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tighter leading-tight text-balance">
                   {postData.title}
                </h1>
             </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 flex-1">
             <div className="p-6 md:p-8 border-b md:border-b-0 border-r border-gray-200 dark:border-white/10 hidden md:block">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 sticky top-24">
                   Article Content
                </span>
             </div>
             <div className="md:col-span-3 p-6 md:p-12">
                <ArticleClientWrapper htmlContent={postData.contentHtml || ''} />
             </div>
          </div>
       </div>
    </main>
  );
}
