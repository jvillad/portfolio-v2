import axios from 'axios';
import { IPinnedProjects } from '../interface/IGlobal';

export default function getUser(
  setProjects: React.Dispatch<
    React.SetStateAction<IPinnedProjects[] | undefined>
  >
) {
  const user = 'jvillad';
  const baseUrl = `https://gh-pinned-repos.egoist.dev/?username=${user}`;
  axios.get<IPinnedProjects[]>(baseUrl).then((response) => {
    setProjects(response.data);
  });
}
