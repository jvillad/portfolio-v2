import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { PinnedItem } from '../../lib/interface/IGlobal';
import DisplayProj from './DisplayProj';

function Projects() {
  const [pinnedItems, setPinnedItems] = useState<PinnedItem[]>([]);
  const { data } = useQuery(gql`
    query GetPinnedItems {
      pinnedItems @client
    }
  `);
  useEffect(() => {
    setPinnedItems(data?.pinnedItems?.edges);
  }, [data?.pinnedItems?.edges]);

  return (
    <section className="max-w-[1200px] mx-auto px-[16px]">
      <div className="py-10 text-[24px]">Some things I have built:</div>
      <div className="grid grid-cols-1 place-content-center md:grid-cols-2 md:place-content-center">
        {pinnedItems &&
          pinnedItems.map((proj) => (
            <div key={proj.node.id} className="flex justify-center p-2">
              <DisplayProj proj={proj} />
            </div>
          ))}
      </div>
      <p className="pt-4 text-xl">
        All of my work can be seen through my{' '}
        <a
          href="/"
          className="text-rose-600 hover:underline hover:underline-offset-4 hover:text-rose-900"
        >
          GitHub
        </a>{' '}
        profile.
      </p>
    </section>
  );
}

export default Projects;
