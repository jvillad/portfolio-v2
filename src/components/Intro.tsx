import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';

function Intro() {
  return (
    <section className="h-screen grid grid-rows-1 place-items-center mt-20 sm:mt-0">
      <div className="flex flex-col sm:flex-row items-center max-w-[900px] px-[16px]">
        <Fade
          cascade={true}
          direction="up"
          damping={0.5}
          duration={400}
          triggerOnce={true}
        >
          <div className="w-32 md:w-64 h-40 md:h-80 mx-auto sm:mx-0 sm:mr-5 md:mr-8 flex items-center">
            <img
              src="https://res.cloudinary.com/supremevillad/image/upload/c_scale,w_2316/v1688704464/358735218_1205490856809870_3616068741508629111_n_cb7lwq.jpg"
              alt="the best web developer that made this portfolio"
              className="rounded-md shadow-md"
            />
          </div>
          <div className="my-4 max-w-xl">
            <div className="mt-6">
              <p>
                <span className="text-xl">
                  <span className="text-rose-600">Yo! </span> my name is
                </span>
                <span className="block text-[40px] md:text-[54px] font-semibold">
                  John Villademosa
                </span>
              </p>
              <p className="pb-4 text-2xl">A Software Engineer.</p>
            </div>
            <div className="mb-8">
              <p className="text-md md:text-lg leading-relaxed">
                Currently honing my skills in .NET 8 and Database Design. I also
                enjoy building web applications with React, Astro, NextJS and
                Angular.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="pb-[180px] sm:pb-[220px]">
        <div className="hidden sm:block border-2 border-gray-300 rounded-full p-2 hover:text-rose-600">
          <Link to="projects" smooth offset={-100} duration={500}>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce mt-2 hover:cursor-pointer"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Intro;
