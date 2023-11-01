// A single `Header` component that appears on multiple pages

import nameTitle from '../assets/nameTitle.png'
import nameTitle2 from '../assets/nameTitle2.png'
import subTitle from '../assets/subTitle.png'
import subTitle2 from '../assets/subTitle2.png'
import portfolioPic from '../assets/portfolioPic.png'


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
        <header className="homeTitle" id="home">
            <div className="bothTitles">
                <img src={nameTitle2} style={styles.size} alt="header title" />
                <img src={subTitle2} style={styles.subsize} alt="header subtitle" className="subHeading" />
                {/* <img src={portfolioPic} alt="picture" className="portfolioPic" /> */}

            </div>

        </header>
    );
}

export default Header;