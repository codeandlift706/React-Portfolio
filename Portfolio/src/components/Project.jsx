// A single `Project` component that will be used multiple times in the Portfolio section

const styles = {
    card: {
        margin: 20,
        background: '#e8eaf6',
    },
    heading: {
        background: 'black',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
    },
    content: {
        padding: 20,
    },
};

function Project() {
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

export default Project;