import ProjectCard from "./ProjectCard.jsx";
import projects from "../projects.js";

const ProjectsHub = () => {
  return (
    <section className="project_header">
      <h1 className="font-bold mb-5">My Projects</h1>
      <div className="project_list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsHub;
