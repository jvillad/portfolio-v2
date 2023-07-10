function Contact() {
  return (
    <section id="#contact">
      <div className="px-8 py-12">
        <form
          className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100  rounded-lg shadow-lg"
          action="https://formspree.io/f/xvojoqrq"
          method="POST"
        >
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-gray-700 text-4xl lg:text-3xl mt-2 font-bold leading-tight">
                Get In Touch!
              </h2>
              <div className="text-gray-700 mt-8">
                My inbox is always open for opportunities, suggestions and
                collaboration.
              </div>
            </div>
            <div className="mt-8 text-center">
              <div>
                <img
                  src="./assets/contact.svg"
                  alt="contact form illustration"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder=""
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                name="message"
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
