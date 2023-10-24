
const styles = {
    card: {
        margin: 20,
        background: '#e8eaf6',
    },
    heading: {
        background: '#3f51b5',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'black',
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
About Me Section
            </div>
        </div>
    );
}

export default About;