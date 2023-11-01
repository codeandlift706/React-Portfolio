

const styles = {
    contactStyle: {
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    linkStyle: {
        border: '1px black',
        padding: '5px',
    }
};

function Contact() {
    return (
        <section style={styles.contactStyle} className="contact" id="contact">
                <div style={styles.linkStyle}>
                    <a href="#">Email</a>
                </div>
                <div style={styles.linkStyle}>
                    <a href="#">LinkedIn</a>
                </div>
                <div style={styles.linkStyle}>
                    <a href="#">Phone</a>
                </div>
        </section>
    );
}

export default Contact;