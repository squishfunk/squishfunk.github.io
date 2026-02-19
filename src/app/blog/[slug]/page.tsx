import { getAllPostIds, getPostData } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <main className="min-h-screen bg-[#fbfbfd]">
      <Navbar />
      
      <div className="py-32 px-6 max-w-4xl mx-auto">
        <article className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-img:rounded-3xl prose-img:shadow-lg">
          <header className="mb-16 text-center not-prose">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">{postData.title}</h1>
            <div className="text-gray-500 font-medium flex items-center justify-center gap-4">
              <time dateTime={postData.date}>{postData.date}</time>
              {postData.tags && (
                <div className="flex gap-2">
                  {postData.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-sm font-semibold text-gray-600 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>
          
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
        </article>
      </div>
      
      <Footer />
    </main>
  );
}
