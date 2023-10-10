import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


    return (
        <section className={`${styles.navbar} `}>
            {/*             
            <a className={styles.navbar__link} href='/profile'>Profile</a>
            <a className={styles.navbar__link} href='/notes'>Notes</a>
            <a className={styles.navbar__link} href='/favorites'>Favorites</a> */}

            <NavLink to="/profile" className={styles.navbar__link} >Profile</NavLink>
            <NavLink to="/notes" className={styles.navbar__link}  >Notes</NavLink>
            <NavLink to="/favorites" className={styles.navbar__link} >Favorites</NavLink>


        </section>
    )
}

export default Navbar;