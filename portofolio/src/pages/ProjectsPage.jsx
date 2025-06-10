import { useNavigate, useParams } from "react-router-dom";
import projects from "../projects.js";

const ProjectsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const project = projects.find((proj) => proj.id === Number(id));

    if (!project){
        return (<h2>Niet gevonden!</h2>)
    }

    return ( 
        <section className="flex justify-center">
            <img className="w-240 h-120 mt-24 absolute" src={project.imageSrc} alt={project.name} />

            <div className="absolute w-226 mt-146 bg-white text-black p-5 rounded-lg shadow-md mx-60">
            <h1 className="font-bold">Project: {project.name}</h1>
            <br></br>
            <p>{project.description}</p>
            <br></br>
            <h1 className="font-bold">Link: <a href={project.link} className="text-blue-600 underline">{project.name}</a></h1>
            <br></br>
            <h3 className="font-bold">Code used:</h3>
            <div className="flex">
            <img className="w-30 h-35" src={project.code} />
            <img className="w-35 h-35" src={project.code2} />
            <img className="w-35 h-35" src={project.code3} />
            </div>
            </div>
        <button onClick={() => navigate(-1)}>Terug</button>
        </section>
     );
}
 
export default ProjectsPage;