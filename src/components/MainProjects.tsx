function MainProjects() {
  return (
    <section className="max-w-[1200px] mx-auto px-[16px] my-10">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:mr-4">
          <p>Feature Project</p>
          <h2 className="text-2xl font-bold mb-2">
            <a
              href="https://beanscenecafe.azurewebsites.net/"
              target="_blank"
              rel="noreferrer"
            >
              Cafe Beanscene Reservation
            </a>
          </h2>
          <p className="mb-10">
            A web application that provides secure user authentication and
            authorization features. Users can create accounts and make
            reservations while staff members have the ability to manage
            reservations and assign seating arrangements. The application also
            includes a manager dashboard.
          </p>
          <p>Tech Stack</p>
          <ul className="flex justify-between font-light text-sm mx-5">
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
            className="w-full"
          />
          <div className="absolute -bottom-9 left-0 right-0 text-white flex justify-center py-2">
            <a
              href="https://beanscenecafe.azurewebsites.net/"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 p-3 text-yellow-800 rounded-lg hover:bg-rose-600 hover:text-rose-50 shadow-xl"
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
