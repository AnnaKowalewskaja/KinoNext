import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

const Header = (props) => {
  let loginUser;
  if (props.isAuth) {
    loginUser = <NavLink to="/profile">{props.userName}</NavLink>;
  } else {
    loginUser = <NavLink to="/login">Login</NavLink>;
  }

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
