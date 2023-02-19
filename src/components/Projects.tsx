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
      <div className="p-10">Projects that I am proud of:</div>
      <div className="grid grid-cols-2 place-content-center">
        {projects &&
          projects.map((proj) => (
            <div key={proj.repo} className="flex justify-center p-2">
              <DisplayProj proj={proj} />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Projects;
