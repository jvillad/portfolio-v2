function Intro() {
  return (
    <section className="flex flex-col sm:flex-row mb-24 sm:mb-56 items-center max-w-[900px] mt-16 px-[16px]">
      <div className="w-32 md:w-64 h-40 md:h-80 mx-auto sm:mx-0 sm:mr-5 md:mr-8 flex items-center">
        <img
          src="https://res.cloudinary.com/supremevillad/image/upload/c_scale,w_2316/v1688704464/358735218_1205490856809870_3616068741508629111_n_cb7lwq.jpg"
          alt="the best web developer that made this portfolio"
          className="rounded-md"
        />
      </div>
      <div className="my-4 max-w-xl">
        <div className="mt-6">
          <p>
            <span className="text-xl">
              <span className="text-rose-600">Yo! </span> my name is
            </span>
            <span className="block text-[50px] md:text-[54px] font-semibold">
              John Villademosa
            </span>
          </p>
          <p className="pb-4 text-2xl">A Software Engineer.</p>
        </div>
        <div className="mb-8">
          <p className="text-md md:text-lg leading-relaxed">
            Focusing my learning on ASP.Net Core, PostgreSQL and TypeScript.
            Also, spending some time building web applications using NextJS and
            Angular.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Intro;
