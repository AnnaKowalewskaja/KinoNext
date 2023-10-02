import styles from './Header.module.css';

import iconSrc from './../../assets/icon/icon.svg';
const Header = () => {
    return (
        <div className={`${styles.header} `}>
            Header
            <img src={iconSrc} alt="logo" />
        </div>
    )
}

export default Header;