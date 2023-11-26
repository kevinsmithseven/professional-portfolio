import '../styles/Project.css'

const Project = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repository</a>
            <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Deployed Site</a>
        </div>
    );
};

export default Project;