import '../styles/Footer.css'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaRegSmileWink } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className='footer'>
            <a href='https://github.com/kevinsmithseven' target="_blank" rel="noopener noreferrer" aria-label="Link to Kevin Smith's Github profile">
                <BsGithub size={85} />
            </a>
            <a href='https://www.linkedin.com/in/kevinsmithseven/' target="_blank" rel="noopener noreferrer" aria-label="Link to Kevin Smith's LinkedIn profile">
                <BsLinkedin size={85} />
            </a>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank" rel="noopener noreferrer" aria-label="Hello Rick">
                <FaRegSmileWink size={85} />
            </a>
        </footer>
    );
}