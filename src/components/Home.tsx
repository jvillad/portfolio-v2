import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import Contact from './Contact';
import Intro from './Intro';
import MainProjects from './MainProjects';

function Home() {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.prefetchQuery(
      'blog-posts',
      async () => {
        const response = await fetch(
          'https://notion-server.onrender.com/v1/api/blog-posts'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const blogs = await response.json();
        return blogs;
      },
      { staleTime: 10000 }
    );
  }, [queryClient]);
  return (
    <>
      <Intro />
      <MainProjects />
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
