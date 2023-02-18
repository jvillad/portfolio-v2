/* eslint-disable prefer-template */
import { TProject } from '../../lib/interface/IGlobal';

function DisplayProj({ proj }: TProject) {
  const project = proj;
  return (
    <div
      key={project.repo}
      className="bg-gray-700 text-white text-center rounded p-2"
    >
      <a href={project.link}>
        <img
          src={project.image}
          alt={project.repo}
          className="w-[440px] h-[240px]"
        />
        <div>{project.language}</div>
        GitHub Repo
      </a>
    </div>
  );
}

export default DisplayProj;
