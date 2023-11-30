import home from '../../public/homeicon.svg'
import project from '../../public/projecticon.svg'
import about from '../../public/abouticon.svg'
import contact from '../../public/contacticon.svg'

function Navbar() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#home"><img src={home} className="icon hover:animate-pulse" alt="home icon" /></a>
            </li>
            <li className="nav-item">
                <a href="#project"><img src={project} className="icon hover:animate-pulse" alt="project icon" /></a>
            </li>
            <li className="nav-item">
                <a href="#about"><img src={about} className="icon hover:animate-pulse" alt="about icon" /></a>
            </li>
            <li className="nav-item">
                <a href="#contact"><img src={contact} className="icon hover:animate-pulse" alt="contact icon"/></a>
            </li>
        </ul>
    );
}

export default Navbar;





