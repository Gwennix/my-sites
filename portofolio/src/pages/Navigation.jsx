import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import github from '../img/github logo.png';
import linkedin from '../img/LinkedIn logo.png';
import bluesky from '../img/bluesky.png';
import email from '../img/email.png';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenuOnClickOutside = (event) => {
    if (!event.target.closest('#navbar-sticky') && !event.target.closest('#hamburger-btn')) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenuOnClickOutside);

    return () => {
      document.removeEventListener('click', closeMenuOnClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="fixed w-full z-20 top-0 left-0 bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            <button
              id="hamburger-btn"
              type="button"
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              onClick={toggleMenu}>
             
              <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">

              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>

              </svg>
            </button>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6">

          <Link to="/" className="font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">Home</Link>

          <Link to="/About" className="font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">About Me</Link>

          <Link to="/Skills" className="font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">Skills</Link>

          <Link to="/ProjectsTab" className="font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">Projects</Link>

          <Link to="/Timeline" className="font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">Timeline</Link>

          <Link to="/Contact" className="font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">Contact</Link>

        </div>
        </div>
        </div>

        {/* Mobile */}
        
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute left-0 top-0 w-full h-full bg-white shadow-lg z-30`} id="navbar-sticky">
          <ul className="bg-white space-y-4 py-6 px-6 flex flex-col items-start">
            <li>
              <Link to="/" className="block font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">Home</Link>
            </li>

            <li>
              <Link to="/About" className="block font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">About Me</Link>
            </li>

            <li>
              <Link to="/Skills" className="block font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">Skills</Link>
            </li>

            <li>
              <Link to="/ProjectsTab" className="block font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">Projects</Link>
            </li>

            <li>
              <Link to="/Timeline" className="block font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">Timeline</Link>
            </li>

            <li>
              <Link to="/Contact" className="block font-sans font-bold text-gray-800 hover:text-white py-2 px-4 hover:bg-gray-900 rounded-full">Contact</Link>
            </li>

          </ul>
        </div>
      </nav>

      <div className="sidebar">
        <footer>
          <a href="https://github.com/Gwennix?tab=repositories">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/gwendolyn-h-7243862a5/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://bsky.app/profile/dutchcoding.bsky.social">
            <img src={bluesky} alt="bluesky" />
          </a>
          <a href="mailto:gwen.dev@outlook.com">
            <img src={email} alt="email" />
          </a>
        </footer>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;

