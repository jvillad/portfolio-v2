import { useEffect, useState } from 'react';
import getUser from '../../lib/helper/getPinnedProjects';
import { IPinnedProjects } from '../../lib/interface/IGlobal';
import DisplayProj from './DisplayProj';

function Projects() {
  const [projects, setProjects] = useState<IPinnedProjects[]>();

  useEffect(() => {
    getUser(setProjects);
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto px-[16px]">
      <div className="py-10 text-[24px]">Some things I have built:</div>
      <div className="grid grid-cols-1 place-content-center md:grid-cols-2 md:place-content-center">
        {projects &&
          projects.map((proj) => (
            <div key={proj.repo} className="flex justify-center p-2">
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
