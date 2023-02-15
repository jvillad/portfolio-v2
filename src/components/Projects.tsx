import { useEffect, useState } from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState();
  const baseUrl = 'https://api.github.com/users/jvillad/repos';
  useEffect(() => {
    axios.get(baseUrl).then((response: any) => {
      setProjects(response.data);
    });
  }, []);
  return (
    <section className="max-w-[1200px] m-auto">
      <div>Projects that I am proud of: </div>
    </section>
  );
}

export default Projects;
