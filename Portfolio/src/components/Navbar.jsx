// A single `Navigation` component within the header that will use `Link` components from `react-router-dom` to conditionally render the different sections of your portfolio

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
        <section style={styles.navBarStyle} className="navbar text-ellipsis" >
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
        </section>
    );
}

export default Navbar;





