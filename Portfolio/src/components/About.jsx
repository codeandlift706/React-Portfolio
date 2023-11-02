
import aboutHeading from '../assets/aboutHeading.png'
import portfolioPic from '../assets/portfolioPic.png'
import portfolioPic2 from '../assets/portfolioPic2.jpg'

const styles = {
    card: {
        // margin: '4rem',
    },
    heading: {
        minHeight: 50,
        pneHeight: 3.5,
        fontSize: '4rem',
        color: 'white',
        padding: '16rem',
    },
    content: {
        padding: '5em',
        fontSize: '1.3rem',
    },
    picture: {
        // marginLeft: '8rem',
        borderRadius: '200px',
        width: '20%',
    },
};

function About() {
    return (
        <>

            <div style={styles.card} id="about">
                <div style={styles.heading} id="aboutHead">
                    <img src={aboutHeading} alt="header title" />
                </div>

                <div class="aboutContent">
                    <img style={styles.picture} src={portfolioPic2} alt="picture" />
                    <div style={styles.content}>
                        <p>Born in Montreal, Quebec & Raised in Orange County, Calfornia.</p>
                        <p>Dog lover, fantasy football enthusiast, lifter. </p>
                        <p>Aspiring to transition from HR professional into the world of coding, determined to keep learning the programming languages needed to succeed and master web & software development. </p>
                        <p>Aiming to apply my +4 years of project management experience and continuous improvement mindset to design and enhance user interfaces. </p>
                        <p></p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default About;