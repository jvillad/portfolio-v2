function MainProjects() {
  return (
    <section className="max-w-[1200px] mx-auto px-[16px] my-10">
      <div className="flex flex-col lg:flex-row items-center my-20 sm:my-40 sm:flex-row gap-5">
        <div className="lg:w-1/2 lg:mr-4">
          <p className="font-extralight text-xs text-rose-600">
            Featured Project
          </p>
          <h2 className="text-2xl font-bold mb-2">
            <a
              href="https://beanscenecafe.azurewebsites.net/"
              target="_blank"
              rel="noreferrer"
            >
              Cafe Beanscene Reservation
            </a>
          </h2>
          <p className="mb-10 p-1">
            A web application that provides secure user authentication and
            authorization features. Users can create accounts and make
            reservations while staff members have the ability to manage
            reservations and assign seating arrangements. The application also
            includes a manager dashboard.
          </p>
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
          <div className="absolute -bottom-9 left-0 right-0 text-white flex justify-center py-2">
            <a
              href="https://beanscenecafe.azurewebsites.net/"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 p-2 text-yellow-800 rounded-lg hover:bg-rose-600 hover:text-rose-50 shadow-xl"
            >
              Visit Site
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
              href="https://beanscenecafe.azurewebsites.net/"
              target="_blank"
              rel="noreferrer"
            >
              Simple Todo List + Firestore
            </a>
          </h2>
          <p className="mb-10 p-1">
            A simple and user-friendly to-do list web app that offers secure
            Google account login, ensuring your tasks are saved uniquely to your
            user account. Powered by Firebase for reliable and secure cloud
            storage of all your tasks.
          </p>
          <p>Tech Stack</p>
          <ul className="flex justify-between font-light text-sm sm:text-right">
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
          <div className="absolute -bottom-9 left-0 right-0 text-white flex justify-center py-2">
            <a
              href="https://easychecklist.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 p-2 text-yellow-800 rounded-lg hover:bg-rose-600 hover:text-rose-50 shadow-xl"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainProjects;
