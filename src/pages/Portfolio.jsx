import projects from '../utils/projects.js';
import Project from '../components/Project.jsx'
import '../styles/Portfolio.css'


const Portfolio= () => {
    return (
      <div className="portfolio-container">
        <h1 className="text-center mb-4">Selected Portfolio</h1>
            {projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    );
  }
  
  export default Portfolio;