import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "3D Animation Portfolio",
    description: "Amazing 3D Animation Portfolio Website with The Help Of HTML, CSS, And Three.Js.",
    image: "public/projects/3D Portfolio Overview.jpeg",
    tags: ["HTML", "CSS", "Three.Js"],
    githubUrl: "https://github.com/Sameerkhansabri/My-3D-Portfolio",
  },
  
  {
    id: 3,
    title: "Web Calculator",
    description: "This Project Is Simple Web Calculator Using HTML And CSS.",
    image: "public/projects/Calculator Overview.png",
    tags: ["HTML", "CSS",],
    githubUrl: "https://github.com/Sameerkhansabri/Calculator",
  },
  
  {
    id: 2,
    title: "Login Form Page",
    description: "This Project Is Simple Yet Elegant Login Page Designed Using HTML And CSS.",
    image: "public/projects/Login Form Overview.png",
    tags: ["HTML", "CSS",],
    githubUrl: "https://github.com/Sameerkhansabri/Login-Form",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Project Work </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        These Are Few Of The Latest Projects I’ve Built, Reflecting Both My Technical Skills And Creative Problem-Solving Abilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Sameerkhansabri"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
