function About() {
  return (
    <div className="h-[1050px] max-h-full text-gray-700 max-w-[700px] pt-[50px] mx-10">
      <h1 className="text-[32px] pb-10">Some fun facts about me: </h1>
      <div className="text-xl">
        <p>📍 — Based in Sydney, Australia</p>
        <p>😅 — I do enjoy creating web apps!</p>
        <p>
          📖 — I am currently doing Diploma of InfoTech (Advanced Programming)
          in TAFE NSW - Hornsby.
        </p>
        <p>
          🏃‍♂️ — When not on my computer coding or playing video games. You can
          find me outside running. My PR for half marathon is 1hour and 48
          minutes and 3hours and 51minutes for marathon.
        </p>
        <p>🤓 — I like video games.. A lot</p>
        <p>🐶 — Have a bias for dogs. In fact we have 11 🐶 back at home.</p>
        <p className="pt-[50px]">Technologies I’ve been using recently:</p>
        <div className="grid grid-cols-2">
          <div className="pt-5">
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              JavaScript
            </div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              TypeScript
            </div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              React
            </div>
          </div>
          <div className="pt-5">
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              C#
            </div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              ASP.Net Core 6
            </div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              MS SQL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
