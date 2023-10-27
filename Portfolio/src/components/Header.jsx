// A single `Header` component that appears on multiple pages

import nameTitle from '../assets/nameTitle.png'
import subTitle from '../assets/subTitle.png'
import portfolioPic from '../assets/portfolioPic.png'


// const styles = {
//     headerStyle: {
//         background: 'white',
//         padding: 200,
//         flexDirection: 'row',
//         alignItems: 'flex-start',
//         justifyContent: 'center',
//     },
//     headingStyle: {
//         fontSize: '25px',
//         flexDirection: 'row',
//         alignItems: 'flex-start',
//         justifyContent: 'center',
//     },
// };



function Header() {
    return (
        <header className="homeTitle">

            <img src={nameTitle} alt="header title"/>
            <img src={subTitle} alt="header subtitle" className="subHeading"/>
            <img src={portfolioPic} alt="picture" className="portfolioPic"/>

        </header>
    );
}

export default Header;