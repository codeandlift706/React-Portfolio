
const styles = {
    card: {
        margin: '1rem',
        padding: '1rem',
    },
    heading: {
        minHeight: 50,
        pneHeight: 3.5,
        fontSize: '3rem',
        color: 'pink',
        padding: '6rem',
        // backgroundImage: url("cityBackground.png"),
    },
    content: {
        padding: 5,
    },
};

function About() {
    return (
        <>
            
            <div style={styles.card} id="about">
                <div style={styles.heading}>about me</div>
                <div style={styles.content}>
                    <p>Orange County, Calfornia.</p>
                    <p>Dog lover, fantasy football enthusiast, lifter. </p>
                    <p>Aspiring to transition from HR professional into the world of coding, determined to keep learning the programming languages needed to succeed and master web & software development. </p>
                    <p>Aiming to apply my +4 years of project management experience and continuous improvement mindset to design and enhance user interfaces. </p>
                    <p></p>
                </div>
            </div>
        </>
    );
}

export default About;