import dayjs from 'dayjs';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';

function Blog() {
  dayjs.extend(localizedFormat);
  const { data, isLoading } = useQuery('blog-posts', async () => {
    const response = await fetch(
      'https://jv-notion-server.onrender.com/api/blog-posts'
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
    <div className="max-w-[700px] mx-auto min-h-screen my-10">
      {data
        ? data.results.map((page: any) => {
            return (
              <div key={page.id}>
                <Link
                  to={`/blog/${page.id}`}
                  className="transition duration-300 hover:scale-105"
                >
                  <div className="flex flex-col rounded-xl shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                      <img
                        className="h-[250px] w-full object-cover"
                        src={page.cover.external.url}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 bg-gray-50 pt-2 pb-6 px-4 flex flex-col justify-between">
                      <div className="flex-1">
                        <span className="block mt-2">
                          <h4 className="text-xs font-medium text-gray-600">
                            {dayjs(page.last_edited_time).format('LLLL')}
                          </h4>
                        </span>
                        <span className="block mt-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {page.properties.Name.title[0].plain_text}
                          </h3>
                        </span>

                        <span className="block mt-2 p-1">
                          <p className="text-sm text-gray-600">
                            {page.properties.Summary.rich_text[0].plain_text}
                          </p>
                        </span>

                        <span className="block mt-2 space-x-4">
                          {page.properties.Tags.multi_select.map((tag: any) => (
                            <span
                              key={tag.id}
                              className="bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg"
                            >
                              #{tag.name}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        : ''}
    </div>
  );
}

export default Blog;
