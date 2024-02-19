import { ArrowUpRight } from "lucide-react";
import profile from "../assets/images/Me2.png";
import linkedin from "../assets/icons/aboutme_icons/linkedin.svg";
import github from "../assets/icons/aboutme_icons/github.svg";
import twitter from "../assets/icons/aboutme_icons/twitter.svg";
import instagram from "../assets/icons/aboutme_icons/instagram.svg";
import mail from "../assets/icons/aboutme_icons/mail.svg";

export function AboutMeCard() {
  return (
    <div className="drop-shadow-lg bg-[#192236] rounded-xl overflow-hidden max-w-4xl">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
        <div className="p-6 md:w-1/2">
          <h1 className="flex justify-start items-center text-gray-300 text-3xl font-semibold mb-4">
            About Me <ArrowUpRight className="ml-2 h-6 w-6" />
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
          </h1>

          <p className="text-gray-500 text-lg">
            Hello! I&apos;m a passionate web developer driven by a childhood
            fascination with computers. Through self-guided learning, I&apos;ve
            delved into the world of JavaScript, React, Rust, Python, and more.
            I thrive in collaborative, innovative environments and draw
            inspiration from cinema, sports, and gaming. Let&apos;s connect and
            create impactful solutions together!
          </p>
        </div>
      </div>
    </div>
  );
}
