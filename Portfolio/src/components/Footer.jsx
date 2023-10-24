// A single `Footer` component that appears on multiple pages

const styles = {
    footerStyle: {
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'row',
        // alignItems: 'flex-start',
        justifyContent: 'center',
        background: 'black',
    },
    linkStyle: {
        border: '1px black',
        padding: '5px',
    }
};

function Footer() {
    return (
        <section style={styles.footerStyle} className="footer">

                <div style={styles.linkStyle}>
                    <a href="#">GitHub</a>
                </div>
                <div style={styles.linkStyle}>
                    <a href="#">Stack Overflow</a>
                </div>
                <div style={styles.linkStyle}>
                    <a href="#">LinkedIn</a>
                </div>
                {/* <div>
                    <p style={styles.linkStyle}>Chan Nguyen</p>
                </div> */}
        </section>
    );
}

export default Footer;