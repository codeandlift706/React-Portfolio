// A single `Footer` component that appears on multiple pages

const styles = {
    footerStyle: {
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    footerStyle: {
        border: '1px black',
        padding: '5px',
    }
};

function Footer() {
    return (
        <nav style={styles.footerStyle} className="footer">
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

export default Footer;