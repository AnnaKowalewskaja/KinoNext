import styles from './Navbar.module.css';


const Navbar = () => {


    return (
        <div className={`${styles.navbar} `}>
            <a className={styles.navbar__link} href='/profile'>Profile</a>
            <a className={styles.navbar__link} href='/notes'>Notes</a>
            <a className={styles.navbar__link} href='/favorites'>Favorites</a>

        </div>
    )
}

export default Navbar;