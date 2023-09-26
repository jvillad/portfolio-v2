import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavProps } from '../../lib/interface/IGlobal';

function Nav({ mode, toggleMode }: NavProps) {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="pt-8 max-w-[1200px] mx-auto text-md">
      <div className="flex flex-wrap justify-between mx-2 items-center md:py-0">
        <div className="py-3 font-bold flex items-center gap-10">
          <button
            type="button"
            className="relative flex items-center justify-center w-10 h-10 rounded-full focus:outline-none bg-[#161615]"
            onClick={toggleMode}
          >
            {mode === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-moon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
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
                className="feather feather-sun"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
            <div
              className={`toggle-icon absolute w-6 h-6 transition-transform ${
                mode === 'dark' ? 'rotate-0' : 'rotate-180'
              }`}
            />
          </button>
          <a href="/" className="text-xl hidden sm:inline ">
            John Villademosa
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
              className="feather feather-align-justify w-7 h-7 hover:cursor md:hidden block  stroke-2"
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

        <div
          className={` ${
            !open && 'hidden'
          }  w-full text-center md:flex md:items-center md:justify-between md:w-3/5`}
        >
          <div className="py-2">
            <button
              type="button"
              className="hover:text-rose-600 hover:cursor-pointer"
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const projectSection = document.getElementById('projects');
                  if (projectSection) {
                    projectSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              Projects
            </button>
          </div>
          <hr />
          <div className="py-2">
            <a
              href="/blog"
              className="hover:text-rose-600 hover:cursor-pointer"
            >
              Blog
            </a>
          </div>
          <hr />
          <div className="pt-10 pb-2 md:pt-2">
            <a
              href="/about"
              className="hover:text-rose-600 hover:cursor-pointer"
            >
              About
            </a>
          </div>
          <hr />
          <div className="py-2">
            <button
              type="button"
              onClick={navigateToContact}
              className="hover:text-rose-600"
            >
              Contact
            </button>
          </div>
          <hr />
          <div className="py-3 flex justify-center items-center">
            <a
              href="https://github.com/jvillad"
              target="_blank"
              rel="noreferrer"
              className="hover:text-rose-600"
            >
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
          <div className="py-3 flex justify-center  items-center">
            <a
              href="https://www.linkedin.com/in/jyvill/"
              target="_blank"
              className="hover:text-rose-600"
              rel="noreferrer"
            >
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
        </div>
      </div>
    </nav>
  );
}
export default Nav;
