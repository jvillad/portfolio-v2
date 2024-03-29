import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { renderBlock } from './notion/NotionRenderer';

function Post() {
  const { slug } = useParams();
  const url = `https://notion-server.onrender.com/v1/api/blog-posts/${slug}`;
  const queryKey = ['blog-post', slug];

  const { data, isLoading } = useQuery(
    queryKey,
    async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const blogPostData = await response.json();
      return blogPostData;
    },
    {
      cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
    }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <span className="animate-dots text-2xl font-bold">
          Loading<span className="dot-1 text-3xl">.</span>
          <span className="dot-2 text-3xl">.</span>
          <span className="dot-3 text-3xl">.</span>
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-[700px] mx-auto min-h-screen">
      <article
        className="prose lg:prose-xl my-10"
        suppressHydrationWarning={true}
      >
        {data.map((block: any) => (
          <div key={block.id} className="text-sm">
            {renderBlock(block)}
          </div>
        ))}
      </article>
    </div>
  );
}

export default Post;
