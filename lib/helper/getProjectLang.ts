import axios from 'axios';
import {
  ILangResponse1,
  ILangResponse2,
  ILangResponse3,
  IPinnedProjects,
} from '../interface/IGlobal';

export default function getRepo(
  project: IPinnedProjects[],
  setLang: React.Dispatch<
    React.SetStateAction<
      ILangResponse1[] | ILangResponse2[] | ILangResponse3[] | undefined
    >
  >
) {
  project.forEach((proj) => {
    const baseUrl = `https://api.github.com/repos/${proj.owner}/${proj.repo}/languages`;
    axios
      .get<ILangResponse1[] | ILangResponse2[] | ILangResponse3[]>(baseUrl)
      .then((response) => {
        setLang(response.data);
      });
  });
}
