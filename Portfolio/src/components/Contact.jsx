import contactHeading from '../assets/contactHeading.png'

const styles = {
    content: {
        // padding: '5rem',
    },
    linkStyle: {
        // border: '1px black',
        // padding: '5px',
        textAlign: 'left',
        paddingLeft: '1rem',
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

            <div class="contact-content-container">
                <div>
                    <img src="../location.svg" className="contact-icon" alt="location icon" />
                    <img src="../phone.svg" className="contact-icon" alt="phone icon" />
                    <img src="../email.svg" className="contact-icon" alt="email icon" />
                    <img src="../calendar.svg" className="contact-icon" alt="calendar icon" />
                </div>

                <div style={styles.content}>
                    <p style={styles.linkStyle}>
                        Location: California, US
                    </p>

                    <p style={styles.linkStyle}>
                        Phone: (949) 315-6839
                    </p>

                    <p style={styles.linkStyle}>
                        < a href="mailto:channguyen715@gmail.com">Email: channguyen715@gmail.com</a>
                    </p>

                    <p style={styles.linkStyle}>
                        < a href="https://calendly.com/channguyen715/15min">Quick Chat: Set up time via Calendly</a>
                    </p>
                </div>
            </div>


        </section>
    );
}

export default Contact;
