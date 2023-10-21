// A single `Navigation` component within the header that will use `Link` components from `react-router-dom` to conditionally render the different sections of your portfolio

export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <nav className="main-header-menu">
            <section
                style={{
                    display: 'flex',
                    fontFamily: 'helvetica',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <div style={linkStyle}>
                    <a href="#">Home</a>
                </div>
                <div style={linkStyle}>
                    <a href="#">Portfolio</a>
                </div>
                <div style={linkStyle}>
                    <a href="#">About Me</a>
                </div>
                <div style={linkStyle}>
                    <a href="#">Contact</a>
                </div>
            </section>
        </nav>
    );
}