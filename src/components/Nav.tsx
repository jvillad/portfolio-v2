function Nav() {
  return (
    <nav className="py-10 max-w-[1200px] mx-auto text-md">
      <div className="flex justify-between mx-2 items-center">
        {/* branding/logo */}
        <div className="text-rose-600 font-bold">
          <a href="/" className="text-xl font-inter">
            John Vill
          </a>
        </div>

        {/* second div */}

        <div className="flex justify-between w-3/5 items-center">
          <a href="/" className="hover:text-rose-600">
            Projects
          </a>
          <a href="/" className="hover:text-rose-600">
            About
          </a>
          <a href="/" className="hover:text-rose-600">
            Contact
          </a>
          <a href="/" className="hover:text-rose-600">
            Github
          </a>
          <a href="/" className="hover:text-rose-600">
            LinkedIn
          </a>
          <a
            href="/"
            className="bg-rose-500 p-2 text-white rounded-lg hover:bg-rose-600 hover:text-rose-50"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
