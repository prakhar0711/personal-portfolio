
import bgImage from "./assets/images/bg-image.png";
import Hometext from "./components/Hometext";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import linkedin from "./assets/icons/landingpage_icons/linkedin_1.svg";
import github from "./assets/icons/landingpage_icons/github_1.svg";
import twitter from "./assets/icons/landingpage_icons/twitter_1.svg";
import instagram from "./assets/icons/landingpage_icons/instagram_1.svg";
import mail from "./assets/icons/landingpage_icons/mail_1.svg";
import Contact from "./components/Contact.jsx";
import contact from "./assets/images/contact.svg";

function App() {
  return (
    <>
      <Navbar />
      <div id="home" className="font-mono w-full min-h-screen relative">
        <div className="absolute inset-0 flex flex-col items-center">
          <img
            src={bgImage}
            alt="background-image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-center">
              <Hometext />
            </h1>
            <div className="flex gap-2 mt-4">
              <a href="mailto:prakhar.pratyush8010@gmail.com">
                <img src={mail} alt="Mail" />
              </a>
              <a
                href="https://www.linkedin.com/in/prakhar-pratyush-2a317a244/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/prakhar0711"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
              <a
                href="https://twitter.com/Prakhar0711"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" />
              </a>
              <a
                href="https://www.instagram.com/pp_80/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="font-mono "
      >
        <AboutMe />
      </div>

      <div
        id="tech-stack"
        className="font-mono "
      >
        <TechStack />
      </div>

      <div id="timeline" className="font-mono p-5 sm:p-10">
        <Timeline />
      </div>

      <div
        id="projects"
        className="font-mono flex justify-center items-center bg-[#0e131e] p-5 sm:p-10"
      >
        <Projects />
      </div>

      <div
        id="contact"
        className="font-mono grid grid-cols-1 md:grid-cols-2 gap-4 p-5 sm:p-10"
      >
        <div>
          <Contact />
        </div>
        <div>
          <img src={contact} alt="contact" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
}

export default App;
