// A single `Header` component that appears on multiple pages

const styles = {
    headerStyle: {
        background: 'white',
    },
    headingStyle: {
        fontSize: '100px',
    },
};


function Header() {
    return (
        <header style={styles.headerStyle} className="header">
            {/* <h1 style={styles.headingStyle}>Welcome</h1> */}
            <a href="https://fontmeme.com/friends-tv-series-font/">
                <img src="https://fontmeme.com/permalink/231021/eca262c81d58e8c9185b43cd9e6ef238.png" alt="friends-tv-series-font" border="0" />
            </a>
        </header>
    );
}

export default Header;