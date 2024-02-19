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
        <div
          id="home"
          className="absolute justify-center inset-0 flex flex-col items-center"
        >
          <img
            src={bgImage}
            alt="background-image"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
              <Hometext />
            </h1>
            <br />
            <p>
              <div className="flex gap-2 ml-auto">
                <a target="_blank" href="mailto:prakhar.pratyush8010@gmail.com">
                  <img target="_blank" src={mail} alt="LinkedIn" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/prakhar-pratyush-2a317a244/"
                >
                  <img target="_blank" src={linkedin} alt="LinkedIn" />
                </a>
                <a target="_blank" href="https://github.com/prakhar0711">
                  <img src={github} alt="GitHub" />
                </a>
                <a target="_blank" href="https://twitter.com/Prakhar0711">
                  <img src={twitter} alt="Twitter" />
                </a>
                <a target="_blank" href="https://www.instagram.com/pp_80/">
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div id="about" className="font-mono flex justify-center items-center">
        <AboutMe />
      </div>

      <div
        id="tech-stack"
        className="font-mono flex justify-center items-center"
      >
        <TechStack />
      </div>

      <div id="timeline" className="font-mono p-5 lg:p-20">
        <Timeline />
      </div>

      <div
        id="projects"
        className="font-mono flex justify-center items-center bg-[#0e131e]"
      >
        <Projects />
      </div>
      <div id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="order-2 md:order-1">
          <Contact />
        </div>
        <div className="order-1 md:order-2">
          <img src={contact} alt="contact" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
}

export default App;
