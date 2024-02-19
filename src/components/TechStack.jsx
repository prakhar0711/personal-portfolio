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

function TechStack() {
  return (
    <>
      <div className="w-full p-10 sm:p-20 bg-[#0e131e]">
        <div className="px-10 sm:px-20 flex lg:justify-center sm:justify-center text-2xl sm:text-4xl">
          <img src={techstackicon} alt="techstack" className="w-20 sm:w-40" />
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 sm:p-20">
          <div className="flex justify-center">
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
          </div>
          <div className="flex justify-center">
            <TechStackCard
              title="Frameworks"
              description="Django, SpringBoot, Tailwind CSS"
              img1={django}
              img2={spring}
              img3={tailwind}
            />
          </div>
          <div className="flex justify-center">
            <TechStackCard title="Library" description="React" img1={react} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
