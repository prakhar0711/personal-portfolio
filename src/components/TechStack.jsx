import techstackicon from "../assets/icons/techstack_icons/techstack2.png";
import TechStackCard from "./TechStackCard";
import cpp from "../assets/icons/techstack_icons/C++.png";
import c from "../assets/icons/techstack_icons/C.png";
import py from "../assets/icons/techstack_icons/python.png";
import rust from "../assets/icons/techstack_icons/rust.png";
import js from "../assets/icons/techstack_icons/js.png";
import html from "../assets/icons/techstack_icons/html.png";
import css from "../assets/icons/techstack_icons/css.png";
import django from "../assets/icons/techstack_icons/django.png";
import spring from "../assets/icons/techstack_icons/springboot.png";
import tailwind from "../assets/icons/techstack_icons/tailwind.png";
import react from "../assets/icons/techstack_icons/react.png";
import "../assets/css/techstack.css";

function TechStack() {
  return (
    <div className="tech-stack-container">
      <div className="p-10 sm:p-20 bg-[#0e131e]">
        <div className="px-10 sm:px-20 flex justify-center text-4xl sm:text-5xl">
          <img src={techstackicon} alt="techstack" className="w-32 sm:w-40" />
        </div>
        <div className="flex flex-wrap justify-center p-10 sm:p-20">
          <TechStackCard
            title="Languages"
            description="C, C++, Python, Rust, JavaScript, HTML, CSS"
            img1={cpp}
            img2={c}
            img3={py}
            img4={rust}
            img5={js}
            img6={html}
            img7={css}
          />
          <TechStackCard
            title="Frameworks"
            description="Django, SpringBoot, Tailwind CSS"
            img1={django}
            img2={spring}
            img3={tailwind}
          />
          <TechStackCard title="Library" description="React" img1={react} />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
