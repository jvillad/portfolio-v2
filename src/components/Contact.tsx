function Contact() {
  return (
    <section id="#contact">
      <div className="max-w-[1200px] text-center px-[16px] pt-[150px] mx-auto pb-[150px] text-xl">
        <p className="py-2">Get In Touch</p>
        <p>
          My inbox is always open for opportunities, suggestions and
          collaboration
        </p>
        <div className="py-4">
          <a
            href="mailto:jyvillad@gmail.com"
            type="button"
            target="_blank"
            rel="noreferrer"
            className="py-2 bg-yellow-400 text-yellow-800 p-4 rounded-2xl px-28 "
          >
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
