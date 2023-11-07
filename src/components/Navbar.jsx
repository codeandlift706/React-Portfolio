const styles = {
    navBarStyle: {
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    linkStyle: {
        border: '1px black',
        padding: '5px',
    }
};

function Navbar() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#home"><img src="../homeicon.svg" className="icon hover:animate-pulse" alt="home icon" /></a>
            </li>
            <li className="nav-item">
                <a href="#about"><img src="../abouticon.svg" className="icon hover:animate-pulse" alt="about icon" /></a>
            </li>
            <li className="nav-item">
                <a href="#project"><img src="../projecticon.svg" className="icon hover:animate-pulse" alt="project icon" /></a>
            </li>
            <li className="nav-item">
                <a href="#contact"><img src="../contacticon.svg" className="icon hover:animate-pulse" alt="contact icon"/></a>
            </li>
        </ul>
    );
}

export default Navbar;





