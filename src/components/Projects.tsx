import { useEffect, useState } from 'react';
import axios from 'axios';

interface IProject {
  owner: string;
  repo: string;
  link: string;
  description: string;
}

function Projects() {
  const [projects, setProjects] = useState<IProject[]>();

  const baseUrl = 'https://gh-pinned-repos.egoist.dev/?username=jvillad';
  useEffect(() => {
    axios.get(baseUrl).then((response: any) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto px-[16px]">
      <div>Projects that I am proud of: </div>
      <div>
        {projects &&
          projects.map((el) => (
            <div key={el.repo}>
              <div>{el.repo}</div>
              <div>{el.description}</div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Projects;
