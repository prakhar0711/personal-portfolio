import "../assets/css/Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="absolute inset-x-0 top-4 flex justify-center z-10">
      <div className="navbar-container fixed bg-neutral-900 rounded-full">
        <div className="flex space-x-4 text-white text-lg">
          <Link
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
                stroke="white"
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
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <button>About</button>
          </Link>
          <Link
            to="tech-stack"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <button>Tech Stack</button>
          </Link>
          <Link
            to="timeline"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <button>Timeline</button>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <button>Projects</button>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className="rounded-e-full navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <button>Contact</button>
          </Link>
          <div className="rounded-e-full navbar-item px-4 py-2 hover:text-[#336297] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1nInoiWZfcyTuyAk77Lth_yv9jDQEbsF1/view?usp=sharing"
            >
              <button>Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
