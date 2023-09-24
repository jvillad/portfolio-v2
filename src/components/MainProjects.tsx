import { Fade } from 'react-awesome-reveal';

function MainProjects() {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-[16px]">
      <h1 className="mb-20 sm:mb-8 text-3xl font-bold">Main Projects</h1>
      <Fade cascade damping={0.3} duration={800}>
        <div className="flex flex-col lg:flex-row mb-20 sm:mb-40 items-center sm:flex-row gap-5">
          <div className="lg:w-1/2 lg:mr-4">
            <p className="font-extralight text-xs text-rose-600">
              Featured Project
            </p>
            <h2 className="text-2xl font-bold mb-2">
              <a
                href="https://beanscenerestaurant.azurewebsites.net/"
                target="_blank"
                rel="noreferrer"
              >
                Cafe Beanscene
              </a>
            </h2>
            <p>
              A web application that provides secure user authentication and
              authorization features. Users can create accounts and make
              reservations while staff members have the ability to manage
              reservations and assign seating arrangements. The application also
              is inclusive of a manager dashboard.
            </p>

            <a href="/" className="inline-flex gap-2 p-1 items-center my-4">
              <span className="animate-right-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
              <span className="text-[#6b62ff] hover:text-rose-600">
                More about this project
              </span>
            </a>

            <p>Tech Stack</p>
            <ul className="flex justify-between font-light text-sm">
              <li>ASP.Net Core MVC</li>
              <li>EF Core</li>
              <li>MS SQL</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/supremevillad/image/upload/c_scale,q_auto,w_1079/v1688618432/BeansceneReservation_r1yo9o.png"
              alt="Beanscene Reservation Screenshot"
              className="w-full opacity-75 transition-opacity duration-300 hover:opacity-100 rounded-md"
            />
            <div className="absolute -bottom-9 left-0 right-0 text-white flex justify-center py-2 gap-2">
              <a
                href="https://beanscenerestaurant.azurewebsites.net/"
                target="_blank"
                rel="noreferrer"
                className="relative bg-[#6b62ff] p-2 text-gray-100 rounded-lg hover:bg-rose-600 hover:text-rose-50 shadow-xl w-24 text-center"
              >
                <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                Visit Site
              </a>
              <a
                href="https://github.com/jvillad/dotnetcore-mvc-cafe-reservation"
                target="_blank"
                rel="noreferrer"
                className="bg-[#6b62ff] p-2 text-gray-100 rounded-lg hover:bg-rose-600 hover:text-rose-50 shadow-xl w-24 text-center"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center sm:flex-row-reverse gap-5">
          <div className="lg:w-1/2 lg:ml-4 sm:text-right">
            <p className="font-extralight text-xs text-rose-600">
              Featured Project
            </p>
            <h2 className="text-2xl font-bold mb-2">
              <a
                href="https://worldwideweeb.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                World Wide Weeb
              </a>
            </h2>
            <p className="p-1">
              Allows you to search and display all the details about your
              favorite anime, including trailers, characters, and status. It
              also shows what is trending, the top airing anime, and the goated
              animes.
            </p>
            <a href="/" className="inline-flex gap-2 p-1 items-center my-4 ">
              <span className="text-[#6b62ff] hover:text-rose-600">
                More about this project
              </span>
              <span className="animate-left-bounce">
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 ml-2"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </span>
            </a>
            <p>Tech Stack</p>
            <ul className="flex justify-between font-light text-sm sm:text-right">
              <li>NextJS</li>
              <li>Prisma</li>
              <li>TailwindCSS</li>
              <li>MongoDb</li>
            </ul>
          </div>
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/supremevillad/image/upload/v1689326202/Screenshot_2023-07-14_at_7.15.08_pm_qnawyt.png"
              alt="World wide weeb thumbnail"
              className="w-full opacity-75 transition-opacity duration-300 hover:opacity-100 rounded-md"
            />
            <div className="absolute -bottom-9 left-0 right-0 text-white flex justify-center py-2 gap-2">
              <a
                href="https://worldwideweeb.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="relative bg-[#6b62ff] p-2 text-gray-100 rounded-lg hover:bg-rose-600 hover:text-rose-50 shadow-xl w-24 text-center"
              >
                Visit Site
                <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
              </a>

              <a
                href="https://github.com/jvillad/world-wide-weeb"
                target="_blank"
                rel="noreferrer"
                className="bg-[#6b62ff] p-2 text-gray-100 rounded-lg hover:bg-rose-600 hover:text-rose-50 shadow-xl w-24 text-center"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center my-20 sm:mt-40 sm:mb-20 sm:flex-row gap-5">
          <div className="lg:w-1/2 lg:mr-4">
            <p className="font-extralight text-xs text-rose-600">
              Featured Project
            </p>
            <h2 className="text-2xl font-bold mb-2">
              <a
                href="https://easychecklist.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Simple Todo List + Firestore
              </a>
            </h2>
            <p className="mb-10 p-1">
              A simple and user-friendly to-do list web app that offers secure
              Google account login, ensuring your tasks are saved uniquely to
              your user account. Powered by Firebase for reliable and secure
              cloud storage of all your tasks.
            </p>
            <p>Tech Stack</p>
            <ul className="flex justify-between font-light text-sm">
              <li>Vite</li>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/supremevillad/image/upload/c_scale,q_auto:best,w_1187/v1688650080/Screenshot_2023-07-06_at_10.40.28_pm_ywnio9.png"
              alt="Beanscene Reservation Screenshot"
              className="w-full opacity-75 transition-opacity duration-300 hover:opacity-100 rounded-md"
            />
            <div className="absolute -bottom-9 left-0 right-0 text-white flex justify-center py-2 gap-2">
              <a
                href="https://easychecklist.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#6b62ff] p-2 text-gray-100 rounded-lg hover:bg-rose-600 hover:text-rose-50 shadow-xl w-24 text-center"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/jvillad/todo-app-firebase"
                target="_blank"
                rel="noreferrer"
                className="bg-[#6b62ff] p-2 text-gray-100 rounded-lg hover:bg-rose-600 hover:text-rose-50 shadow-xl w-24 text-center"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <div className="text-center">
        <a href="/projects" className="relative group">
          <span className="text-2xl font-bold">
            View Other Pinned Projects 🚀
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-md bg-rose-600 transition-all group-hover:w-full" />
        </a>
      </div>
    </section>
  );
}

export default MainProjects;
