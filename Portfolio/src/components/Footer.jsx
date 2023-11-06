// A single `Footer` component that appears on multiple pages

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
                <img src="../../githubicon.svg" href="https://github.com/codeandlift706" className="card-icon hover:animate-pulse" alt="Github logo icon"></img>
                </div>
                <div style={styles.linkStyle}>
                <img src="../../linkedinicon.svg" href="https://www.linkedin.com/in/chan-nguyen-57184223a/" className="card-icon hover:animate-pulse" alt="LinkedIn logo icon"></img>
                </div>
                                {/* <div style={styles.linkStyle}>
                <img src="../../chanLogo.png" href="https://www.linkedin.com/in/chan-nguyen-57184223a/" className="cn-logo hover:animate-pulse" alt="LinkedIn logo icon"></img>
                </div> */}
        </section>
    );
}

export default Footer;