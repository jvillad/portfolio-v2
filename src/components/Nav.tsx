function Nav() {
  return (
    <nav className="py-10 m-auto">
      <div className="flex justify-around">
        {/* branding/logo */}
        <div>
          <a href="/">John Vill</a>
        </div>

        {/* second div */}
        <div className="flex justify-evenly w-1/2">
          <a href="/">Projects</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Github</a>
          <a href="/">LinkedIn</a>
          <a href="/">Resume</a>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
