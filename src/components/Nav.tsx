import { useState } from 'react';

function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="py-10 max-w-[900px] mx-auto text-md">
      <div className="flex flex-wrap justify-between mx-2 items-center md:py-0">
        {/* branding/logo */}
        <div className="text-gray-900 font-bold">
          <a href="/" className="text-xl font-inter">
            John Vill
          </a>
        </div>
        {!open ? (
          <button
            type="button"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-align-justify w-7 h-7 hover:cursor md:hidden block stroke-gray-900 stroke-2"
            >
              <line x1="21" y1="10" x2="3" y2="10" />
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="21" y1="14" x2="3" y2="14" />
              <line x1="21" y1="18" x2="3" y2="18" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 hover:cursor md:hidden block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        {/* second div */}
        <div
          className={` ${
            !open && 'hidden'
          }  w-full text-center text-gray-600 md:flex md:items-center md:justify-between md:w-3/5`}
        >
          <div className="pt-10 pb-2 md:pt-2">
            <a href="/" className="hover:text-rose-600">
              Projects
            </a>
          </div>
          <hr />
          <div className="py-2">
            <a href="/about" className="hover:text-rose-600">
              About
            </a>
          </div>
          <hr />
          <div className="py-2">
            <a href="/" className="hover:text-rose-600">
              Contact
            </a>
          </div>
          <hr />
          <div className="py-3 grid place-content-center mr-5">
            <a href="/" className="hover:text-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
          <div className="py-3 grid place-content-center">
            <a href="/" className="hover:text-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin "
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          <div className="py-3">
            <a
              href="/"
              className="bg-yellow-400 p-3 text-yellow-800 rounded-lg hover:bg-rose-600 hover:text-rose-50 shadow-xl"
            >
              <span className="font-light">Resumé</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
