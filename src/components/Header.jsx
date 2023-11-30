import nameTitle from '../assets/nameTitle.png'
import subTitle from '../assets/subTitle.png'

const styles = {
    size: {
        height: '100%',
        width: '100%',
    },
    subsize: {
        height: '100%',
        width: '100%',
    }
};


function Header() {
    return (
        <header id="home">
            <div className="bothTitles">
                <img src={nameTitle} style={styles.size} alt="header title" />
                <img src={subTitle} style={styles.subsize} alt="header subtitle" className="subHeading" />
            </div>
        </header>
    );
}

export default Header;