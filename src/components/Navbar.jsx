import "../assets/css/Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="absolute inset-x-0 top-2 flex justify-center z-10">
      <div className="navbar-container fixed bg-neutral-900 rounded-full">
        <div className="flex space-x-4 text-white text-lg">
          <Link
            title="Home"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="rounded-s-full navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <button>
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
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </button>
          </Link>
          <Link
            title="About Me"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <button>
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
                className="feather feather-at-sign"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
              </svg>
            </button>
          </Link>
          <Link
            title="Tech Stack"
            to="tech-stack"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <button>
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
                className="feather feather-cpu"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="14" x2="23" y2="14" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="14" x2="4" y2="14" />
              </svg>
            </button>
          </Link>
          <Link
            title="Experience"
            to="timeline"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <button>
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
                className="feather feather-calendar"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </button>
          </Link>
          <Link
            title="Projects"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <button>
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
                className="feather feather-briefcase"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </button>
          </Link>
          <Link
            title="Contact"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="rounded-e-full navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <button>
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
                className="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </button>
          </Link>
          <div className="rounded-e-full navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
            <a
              title="View Resume"
              target="_blank"
              href="https://drive.google.com/file/d/1nInoiWZfcyTuyAk77Lth_yv9jDQEbsF1/view?usp=sharing"
            >
              <button>
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
                  className="feather feather-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
