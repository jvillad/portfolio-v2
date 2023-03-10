function Intro() {
  return (
    <section className="max-w-[900px] mx-auto pt-[70px] pr-[16px] pb-[100px] pl-[16px]">
      <p>
        <span className="text-xl pb-2">
          <span className="text-yellow-800">👋🏼 Yo! </span> my name is
        </span>
        <span className="block text-[50px] md:text-[64px] font-semibold">
          John Villademosa
        </span>
      </p>
      <p className="pb-6 text-2xl pt-2">
        An aspiring <span className="text-yellow-800">Software Developer.</span>
      </p>
      <p className="text-md md:text-xl leading-relaxed">
        Focusing my learning on ASP.Net Core MVC, PostgresSQL and TypeScript.
        Also, spending some time building web applications in React and NextJS.
      </p>
    </section>
  );
}
export default Intro;
