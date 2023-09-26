import ReactMarkdown from 'react-markdown';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function Post() {
  const { pageId } = useParams();
  const { data, isLoading } = useQuery('blog-posts', async () => {
    const response = await fetch(
      `https://jv-notion-server.onrender.com/api/blog-posts/${pageId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const blogs = await response.json();
    return blogs;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[700px] mx-auto">
      <article className="prose lg:prose-xl my-10">
        <ReactMarkdown>{data.parent}</ReactMarkdown>
      </article>
    </div>
  );
}

export default Post;
