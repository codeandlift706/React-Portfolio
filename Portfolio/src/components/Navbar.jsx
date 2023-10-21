// A single `Navigation` component within the header that will use `Link` components from `react-router-dom` to conditionally render the different sections of your portfolio

const styles = {
    navbarStyle: {
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    linkStyle: {
        border: '1px black',
        padding: '5px',
    },
    navFont: {
        fontFamily: 'Assistant', sansSerif,
        fontFamily: 'Poppins', sansSerif,
    }
};

function Navbar() {
    return (
        <nav style={styles.navbarStyle} className="navbar">
                <div style={styles.linkStyle}>
                    <a href="#">Home</a>
                </div>
                <div style={styles.linkStyle}>
                    <a href="#">Portfolio</a>
                </div>
                <div style={styles.linkStyle}>
                    <a href="#">About Me</a>
                </div>
                <div style={styles.linkStyle}>
                    <a href="#">Contact</a>
                </div>
        </nav>
    );
}

export default Navbar;





