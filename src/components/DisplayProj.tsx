import { useEffect, useState } from 'react';
import getRepo from '../../lib/helper/getProjectLang';
import { ILangResponse1, TProject } from '../../lib/interface/IGlobal';
import SelectIcon from './SelectIcon';

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
      className="bg-gray-800 text-white text-center rounded-md p-[2px]"
    >
      <a href={project.link} target="_blank" rel="noreferrer">
        <img
          src={project.image}
          alt={project.repo}
          className="w-[440px] h-[240px] min-w-[310px] rounded-t-md"
        />
        <div className="text-xs font-light p-1">
          {langKeys?.map((key) => (
            <div
              key={key}
              className="flex items-center w-[80px] max-w-full justify-between mx-auto py-[2px]"
            >
              <SelectIcon progLang={key} />
              <p className="text-gray-200 text-[10px]">{key}</p>
            </div>
          ))}
        </div>
      </a>
    </div>
  );
}

export default DisplayProj;
