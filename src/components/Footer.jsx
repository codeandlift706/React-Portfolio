import github from '../../public/githubicon.svg'
import linkedin from '../../public/linkedinicon.svg'


function Footer() {
    return (
        <footer className="footer">
            <div className="footerLink">
                <a href="https://github.com/codeandlift706" target="_blank"><img src={github} className="footer-icon hover:animate-pulse" alt="Github logo icon" /></a>
            </div>
            <div className="footerLink">
                <a href="https://www.linkedin.com/in/chan-nguyen-57184223a/" target="_blank"><img src={linkedin} className="footer-icon hover:animate-pulse" alt="Linkedin logo icon" /></a>
            </div>
        </footer>
    );
}

export default Footer;