import { useNavigate } from "react-router-dom";

const ProjectCard = ({project}) => {

    const navigate = useNavigate();

    function goToDetail(){
        navigate(`/projects/${project.id}`)
    }

    return ( 
        <section className="project_thumbnail" onClick={goToDetail}>
            <h2>{project.name}</h2>
        </section>
     );
}
 
export default ProjectCard;