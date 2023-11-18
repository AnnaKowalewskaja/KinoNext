import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <span className={styles.header__logo}>
        <Logo />
      </span>
    </section>
  );
};

export default Header;
