
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
            <div style={styles.heading}>Project Name Here</div>
            <div style={styles.content}>
                Project pic
                project description
                project link to demo
                project link to GitHub
            </div>
        </div>
    );
}

export default About;