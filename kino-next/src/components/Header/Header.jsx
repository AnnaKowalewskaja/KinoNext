import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

const Header = (props) => {
  let loginUser = props.isAuth ? (
    <NavLink to="/profile">{props.userName}</NavLink>
  ) : (
    <NavLink to="/login">Login</NavLink>
  );

  return (
    <section className={styles.header}>
      <span className={styles.header__logo}>
        <Logo />
      </span>
      <div className={styles.header__login}>{loginUser}</div>
    </section>
  );
};

export default Header;
