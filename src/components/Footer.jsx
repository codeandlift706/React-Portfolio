const styles = {
    footerStyle: {
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'row',
        // alignItems: 'flex-start',
        justifyContent: 'center',
        // background: 'black',
    },
    linkStyle: {
        border: '1px black',
        paddingTop: '3rem',
    }
};

function Footer() {
    return (
        <section style={styles.footerStyle} className="footer">

            <div style={styles.linkStyle}>
                <a href="https://github.com/codeandlift70"><img src="../../githubicon.svg" className="footer-icon hover:animate-pulse" alt="Github logo icon" /></a>
            </div>

            <div style={styles.linkStyle}>
                <a href="https://www.linkedin.com/in/chan-nguyen-57184223a/"><img src="../../linkedinicon.svg" className="footer-icon hover:animate-pulse" alt="Linkedin logo icon" /></a>
            </div>

        </section>
    );
}

export default Footer;