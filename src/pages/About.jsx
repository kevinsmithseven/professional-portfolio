import '../styles/About.css'
import profilePic from '../images/IMG_0713.jpg';

export default function About() {
  return (
    <div className="my-5">
      <h1 className="text-center mb-4">About Me</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center">
          <img src={profilePic} alt="Picture of me" className="profile-pic mb-4" />
        </div>
        <div className="col-12 col-lg-8 about-text">
          <p className="text-justify">
            Greetings!<br>
            </br><br></br>
            Welcome to my portfolio. As a former US Army Officer and seasoned defense professional, I am currently transitioning into the field of Software Development. I am nearing the completion of a rigorous three-month Full Stack Software Development bootcamp at SMU in Dallas, TX, where I have been honing my skills in a wide range of Full Stack technologies.<br></br><br></br>

            With a robust background in finance, manufacturing, and operations management within the defense sector, I have developed strong leadership abilities and a knack for managing complex programs. My goal is to leverage these skills, combined with my newfound software development expertise, to make a mark as a Software Engineer in the defense industry.<br></br><br></br>

            Embarking on this career change has been an exhilarating and challenging journey. Completing this intensive course has laid a solid foundation for my new career path. I invite you to explore the Portfolio page to view some of the exciting projects I have undertaken during this program. Stay tuned for more updates, as I continuously evolve and expand my portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}

