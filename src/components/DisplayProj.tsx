import { PinnedItem } from '../../lib/interface/IGlobal';
import SelectIcon from './SelectIcon';

interface DisplayProjProps {
  proj: PinnedItem;
}
function DisplayProj({ proj }: DisplayProjProps) {
  const project = proj;

  return (
    <div
      key={project.node.id}
      className="bg-gray-800 text-white text-center rounded-md p-[2px]"
    >
      <a href={project.node.url} target="_blank" rel="noreferrer">
        <img
          src={project.node.openGraphImageUrl}
          alt={project.node.description}
          className="w-[440px] h-[240px] min-w-[310px] rounded-t-md"
        />
        <div className="text-xs font-light p-1">
          {project.node.languages.nodes.map((language) => (
            <div
              key={language.name}
              className="flex items-center w-[160px] max-w-full justify-between mx-auto py-[2px] gap-10"
            >
              <SelectIcon progLang={language.name} />
              <p className="text-gray-200 text-[10px]">{language.name}</p>
            </div>
          ))}
        </div>
      </a>
    </div>
  );
}

export default DisplayProj;
