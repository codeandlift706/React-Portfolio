import nameTitle2 from '../assets/nameTitle2.png'
import subTitle2 from '../assets/subTitle2.png'


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
                <img src={nameTitle2} style={styles.size} alt="header title" />
                <img src={subTitle2} style={styles.subsize} alt="header subtitle" className="subHeading" />
            </div>
        </header>
    );
}

export default Header;