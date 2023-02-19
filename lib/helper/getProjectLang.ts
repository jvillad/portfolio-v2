import axios from 'axios';
import {
  ILangResponse1,
  // ILangResponse2,
  // ILangResponse3,
  IPinnedProjects,
} from '../interface/IGlobal';

export default function getRepo(
  project: IPinnedProjects,
  setLang: React.Dispatch<React.SetStateAction<ILangResponse1 | undefined>>
) {
  const baseUrl = `https://api.github.com/repos/${project.owner}/${project.repo}/languages`;
  axios.get<ILangResponse1>(baseUrl).then((response) => {
    setLang(response.data);
  });
}
