import { useEffect, useState } from 'react';
import getUser from '../../lib/helper/getPinnedProjects';
// import getRepo from '../../lib/helper/getProjectLang';
import {
  // ILangResponse1,
  // ILangResponse2,
  // ILangResponse3,
  IPinnedProjects,
} from '../../lib/interface/IGlobal';
import DisplayProj from './DisplayProj';

function Projects() {
  const [projects, setProjects] = useState<IPinnedProjects[]>();
  // const [languages, setLanguages] = useState<
  //   ILangResponse1[] | ILangResponse2[] | ILangResponse3[]
  // >();

  useEffect(() => {
    getUser(setProjects);
  }, []);

  // TODO: OAuth
  // useEffect(() => {
  //   if (projects) {
  //     getRepo(projects, setLanguages);
  //   }
  // }, [projects]);

  return (
    <section className="max-w-[1200px] mx-auto px-[16px]">
      <div>Projects that I am proud of: </div>
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
