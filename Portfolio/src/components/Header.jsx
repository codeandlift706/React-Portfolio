// A single `Header` component that appears on multiple pages

const styles = {
    headerStyle: {
        background: 'white',
        padding: 200,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    headingStyle: {
        fontSize: '25px',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
};


function Header() {
    return (
        <header style={styles.headerStyle} className="header">
            {/* <h1 style={styles.headingStyle}>Welcome</h1> */}
            {/* <a href="https://fontmeme.com/friends-tv-series-font/"> */}
                <img src="https://fontmeme.com/permalink/231021/eca262c81d58e8c9185b43cd9e6ef238.png" alt="friends-tv-series-font" border="0" />
            {/* </a> */}
            {/* <h1 style={styles.headingStyle}>The One With The Full-Stack Web developer</h1> */}

                {/* <a href="https://fontmeme.com/friends-tv-series-font/"> */}
                    <img src="https://fontmeme.com/permalink/231021/7bf56db3c8043e421374105384863efa.png" alt="friends-tv-series-font" border="0" />
        </header>
    );
}

export default Header;