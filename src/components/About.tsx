import TechStack from './TechStack';

function About() {
  return (
    <div className="h-[1050px] max-h-full text-gray-700 max-w-[700px] pt-[50px] mx-10">
      <h1 className="text-[32px] pb-10">Some fun facts about me: </h1>
      <div>
        <p>📍 Based in Sydney, Australia</p>
        <p>😅 I do enjoy creating web apps!</p>
        <p>
          🏙️ When I&apos;m not on my computer experimenting, you can find me at
          MTG meetups.
        </p>
        <p>🤓 I like video games.. A lot</p>
        <p>🐶 Have a bias for doggos. In fact we have 11 🐶 back at home.</p>
        <TechStack />
      </div>
    </div>
  );
}

export default About;
