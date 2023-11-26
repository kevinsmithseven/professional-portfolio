/* eslint-disable react/prop-types */
import '../styles/Project.css'
import { BsGithub } from "react-icons/bs";

const Project = ({ project }) => {
    return (
        <div className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="overlay">
                <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="project-link">{project.name}</a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label="Link to Kevin Smith's Github profile">
                    <BsGithub />
                </a>
            </div>
        </div>
    );
};

export default Project;
