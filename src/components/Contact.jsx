import contactHeading from '../assets/contactHeading.png'
import location from '../../public/location.svg'
import phone from '../../public/phone.svg'
import email from '../../public/email.svg'
import calendar from '../../public/calendar.svg'


function Contact() {
    return (
        <section className="contact">
            <div className="contactHead">
                <img src={contactHeading} alt="header title" />
            </div>

            <div class="contact-content-container">
                <div>
                    <img src={location} className="contact-icon" alt="location icon" />
                    <img src={phone} className="contact-icon" alt="phone icon" />
                    <img src={email} className="contact-icon" alt="email icon" />
                    <img src={calendar} className="contact-icon" alt="calendar icon" />
                </div>
                <div>
                    <p className="contactLink">
                        Location: California, US
                    </p>

                    <p className="contactLink">
                        Phone: (949) 315-6839
                    </p>

                    <p className="contactLink">
                        < a href="mailto:channguyen715@gmail.com" target="_blank">Email: channguyen715@gmail.com</a>
                    </p>

                    <p className="contactLink">
                        < a href="https://calendly.com/channguyen715/15min" target="_blank">Quick Chat: Set up time via Calendly</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
