import Project from '../pages/ProjectsPage.jsx'
import { useState } from "react";
import Project from '../projects.js'


const ProjectList = () => {
 
  const [searchInput, setSearchInput] = useState("");
  const [projects, setProjects] = useState(data)

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    const filteredProjects = data.filter((project) =>{
      project.name.toLowerCase().includes(searchInput.toLowerCase())
    })

    setProjects(filteredProjects);
  };


  return (
    <>
    <div>
      <input
      input='text'
      placeholder="Zoek een project op"
      onChange={handleChange}
      value={searchInput}
      name="search"
      />
    </div>
      {
        projects.map((project) => (
          <Project key={project.id} name={project.name} image={project.imageSrc} description={project.description}/>
        ))
      }
    </>
  );
};
 
export default ProjectList;