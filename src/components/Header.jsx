import nameTitle from '../assets/nameTitle.png'
import subTitle from '../assets/subTitle.png'

function Header() {
    return (
        <header id="home">
            <div className="bothTitles">
                <img src={nameTitle} className="headerTitle" alt="header title" />
                <img src={subTitle} alt="header subtitle" />
            </div>
        </header>
    );
}

export default Header;