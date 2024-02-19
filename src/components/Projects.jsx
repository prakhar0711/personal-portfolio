import project from "../assets/icons/projects.png";
import ProjectCard from "./ProjectCard";
import kk from "../assets/images/kk.png";
import ongc from "../assets/images/ongc.png";
import task from "../assets/images/task.png";
import js from "../assets/images/javascript.jpg"
function Projects() {
  const projects = [
    {
      title: "KnowledgeKnot",
      description:
        "KnowledgeKnot is a comprehensive web application designed to streamline your learning experience. This project incorporates features such as note-taking, homework tracking, YouTube video search, to-do list management, book search, Wikipedia search, and dictionary lookup.",
      techs: ["Django", "Python", "API"],
      links: ["https://github.com/prakhar0711/KnowledgeKnot"],
      image: kk,
    },
    {
      title: "MPA Web Application",
      description:
        "A RESTful Web application that performs CRUD operation. Implemented various charting options for better decision making.",
      techs: ["Spring Boot", "React", "MySQL Workbench"],
      links: ["https://github.com/prakhar0711/ONGC-WebApp"],
      image: ongc,
    },
    {
      title: "MyTaskMate",
      description:
        "MyTaskMate, an intuitive Django-based multi-user to-do application with data persistence to help users organize their tasks efficiently.",
      techs: ["Django", "Python"],
      links: ["https://github.com/prakhar0711/MyTaskMate"],
      image: task,
    },
    {
      title: "Learn Javascript",
      description:
        "JavaScript Roadmap with basic projects and commented notes.",
      techs: ["JavaScript", "HTML", "CSS"],
      links: ["https://github.com/prakhar0711/Learn-JavaScript"],
      image: js,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-5 md:p-10 lg:p-20 gap-5 md:gap-10 lg:gap-16">
      <div className="w-full md:w-1/2 lg:w-1/3 glow">
        <div className="glow">
          <img src={project} className="w-full min-w-[200px]" alt="Projects" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-5 md:gap-10 lg:gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
