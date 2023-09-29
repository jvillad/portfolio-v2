import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { renderBlock } from './notion/NotionRenderer';

function Post() {
  const { slug } = useParams();
  const url = `https://notion-server.onrender.com/v1/api/blog-posts/${slug}`;
  const queryKey = ['blog-post', slug];
  const queryFn = () => fetch(url).then((res) => res.json());
  const { data, isLoading } = useQuery(queryKey, queryFn);
  if (isLoading) {
    return <div>Loading...</div>;
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
