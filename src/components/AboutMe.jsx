import { AboutMeCard } from "./AboutMeCard";

function AboutMe() {
  return (
    <div className="w-full bg-[#0e131e]">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <AboutMeCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
