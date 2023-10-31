// A single `Header` component that appears on multiple pages

import nameTitle from '../assets/nameTitle.png'
import subTitle from '../assets/subTitle.png'
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
        height: '75%',
        width: '75%',
    },
    subsize: {
        height: '50%',
        width: '50%',
    }
};



function Header() {
    return (
        <header className="homeTitle">
<div>
            <img src={nameTitle} style={styles.size} alt="header title"/>
            <img src={subTitle} style={styles.subsize} alt="header subtitle" className="subHeading"/>
            <img src={portfolioPic} alt="picture" className="portfolioPic"/>

</div>

        </header>
    );
}

export default Header;