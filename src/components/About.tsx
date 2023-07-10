import TechStack from './TechStack';

function About() {
  return (
    <div className="h-[1050px] max-h-full  max-w-[700px] pt-[50px] mx-10">
      <div className="mb-5">
        <h1 className="text-[32px] pb-5">About Me</h1>
        <p className="mb-2">
          Hello! I am John-Rey, I am a software developer based in Sydney.
          Results-driven with a strong education background in programming and
          passion for developing web applications.
        </p>
        <p>
          I derive great enjoyment from building web applications. The process
          is fun and exciting, making the experience truly engaging. My main
          weapon for creating web apps are ASP.Net Core, JavaScript/TypeScript,
          HTML and CSS!
        </p>
      </div>
      <div>
        <h1 className="text-[26px] pb-5">A bit of fun fact</h1>
        <p>
          🏃‍♂️ When I&apos;m not on my computer experimenting or coding,
          you&apos;ll often find me out for a run. (best route is Manly to
          Neutral Bay)
        </p>
        <p>🤓 I like video games.. A lot</p>
        <p>🐶 Have a bias for doggos. In fact we have 11 🐶 back at home.</p>
        <TechStack />
      </div>
    </div>
  );
}

export default About;
