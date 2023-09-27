import { Fade } from 'react-awesome-reveal';
import TechStack from './TechStack';

function About() {
  return (
    <section className="min-h-screen mx-auto max-w-[700px] my-10">
      <Fade
        cascade={true}
        damping={0.3}
        duration={500}
        direction="up"
        triggerOnce={true}
      >
        <div className="mb-5">
          <h1 className="text-3xl font-bold pb-5">About Me</h1>
          <p className="mb-2">
            Hello! I am John-Rey, I am a Software Engineer based in Sydney.
            Results-driven with a strong education background in programming and
            passion for developing web applications.
          </p>
          <p>
            I derive great enjoyment from building web applications. For me, the
            process is fun and exciting, making the experience truly engaging.
            My main weapon for creating web apps are ASP.Net Core, SQL, MongoDB,
            React, NextJS, Angular, JavaScript/TypeScript and the good old HTML
            + CSS combo! You can throw in Bootstrap and Tailwind as well. 😎
          </p>
        </div>

        <div>
          <h1 className="text-[26px] pb-5">A bit of fun fact</h1>
          <p>
            🏃‍♂️ When I&apos;m not on my computer experimenting or coding,
            you&apos;ll often find me out for a run. (best route is Manly to
            Neutral Bay)
          </p>
          <p>🤓 I like video games.. A lot (mostly strategy games)</p>
          <p>
            ⌨️ Into custom mechanical keyboards..{' '}
            <a
              href="https://www.facebook.com/boontribe.ph/"
              className="group inline-block relative"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-blue-500 group-hover:text-pink-500 transition-colors duration-300">
                Boon Tribe
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-pink-500 opacity-0 blur-md transform scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
            </a>
          </p>
          <p>🐶 Love for doggos. In fact we have 11 🐶 back at home.</p>
          <TechStack />
        </div>
      </Fade>
    </section>
  );
}

export default About;
