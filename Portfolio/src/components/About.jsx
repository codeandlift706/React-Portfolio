
const styles = {
    card: {
        margin: 20,
        // background: '#e8eaf6',
    },
    heading: {
        // background: '#3f51b5',
        minHeight: 50,
        pneHeight: 3.5,
        fontSize: '3rem',
        color: 'white',
        padding: '0 20px',
    },
    content: {
        padding: 20,
    },
};

function About() {
    return (
        <div style={styles.card}>
            <div style={styles.heading}>About</div>
            <div style={styles.content}>
                <p>Orange County, Calfornia.</p> 
                <p>Dog lover, fantasy football enthusiast, lifter. </p>
                    <p>Aspiring to transition from HR professional into the world of coding, determined to keep learning the programming languages needed to succeed and master web & software development. </p>
                        <p>Aiming to apply my +4 years of project management experience and continuous improvement mindset to design and enhance user interfaces. </p>
                        <p></p>
                    </div>
            </div>
            );
}

            export default About;