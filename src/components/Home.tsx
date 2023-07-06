import Contact from './Contact';
import Intro from './Intro';
import MainProjects from './MainProjects';
import TechStack from './TechStack';

function Home() {
  return (
    <>
      <Intro />
      {/* <TechStack /> */}
      <MainProjects />
      <Contact />
    </>
  );
}

export default Home;
