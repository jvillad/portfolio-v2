import { useEffect, useState } from 'react';
import getRepo from '../../lib/helper/getProjectLang';
import { ILangResponse1, TProject } from '../../lib/interface/IGlobal';

function DisplayProj({ proj }: TProject) {
  const [languages, setLanguages] = useState<ILangResponse1>();
  const project = proj;

  useEffect(() => {
    if (project) {
      getRepo(project, setLanguages);
    }
  }, [project]);

  let langKeys;
  if (languages) {
    langKeys = Object.keys(languages);
  }

  return (
    <div
      key={project.repo}
      className="bg-gray-700 text-white text-center rounded p-1"
    >
      <a href={project.link} target="_blank" rel="noreferrer">
        <img
          src={project.image}
          alt={project.repo}
          className="w-[440px] h-[240px]"
        />
        <div className="text-xs p-1">
          {langKeys?.map((key) => (
            <p key={key} className="text-gray-200 text-[10px]">
              {key}
            </p>
          ))}
        </div>
      </a>
    </div>
  );
}

export default DisplayProj;
