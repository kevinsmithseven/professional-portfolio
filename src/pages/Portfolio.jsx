import projects from '../utils/projects.js';
import Project from '../components/Project.jsx'
import '../styles/Portfolio.css'


const Portfolio = () => {
  return (
    <div className="project-container">
      <h1>Selected Projects</h1>
            <div className="row justify-content-center">
                {projects.map(project => (
                    <div className="col-md-6 mb-4" key={project.id}>
                        <Project project={project} />
                    </div>
                ))}
            </div>
        </div>
  );
}

export default Portfolio;