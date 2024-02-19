// eslint-disable-next-line react/prop-types
function ProjectCard({ title, description, techs, links, image }) {
  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl project-card mx-auto mb-8 md:mb-0">
      <figure>
        <img
          src={image}
          alt={title} // Use the title as alt text for accessibility
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body p-4 md:p-6 text-left">
        <h2 className="card-title text-lg md:text-xl font-semibold mb-2">
          {title}
          <div className="flex flex-wrap">
            {techs.map((tech, index) => (
              <div key={index} className="badge badge-primary ml-2 mb-2">
                {tech}
              </div>
            ))}
          </div>
        </h2>
        <p className="text-sm md:text-base mb-4">{description}</p>
        <div className="card-actions justify-end">
          {links.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link mr-1"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
              Visit
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
