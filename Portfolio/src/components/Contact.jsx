
import contactHeading from '../assets/contactHeading.png'

const styles = {
    contactStyle: {
        // display: 'flex',
        // fontFamily: 'helvetica',
        // flexDirection: 'row',
        // alignItems: 'flex-start',
        // justifyContent: 'center',
    },
    linkStyle: {
        border: '1px black',
        padding: '5px',
    },
    heading: {
        // minHeight: 50,
        // pneHeight: 3.5,
        fontSize: '4rem',
        color: 'white',
        padding: '16rem',
    },
};

function Contact() {
    return (
        <section style={styles.contactStyle} className="contact" id="contact">
            <div style={styles.heading} id="contactHead">
            <img src={contactHeading} alt="header title" />
            </div>


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