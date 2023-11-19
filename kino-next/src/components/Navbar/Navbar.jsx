import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      path: "/profile",
      text: "Profile",
      id: 1,
    },
    {
      path: "/notes",
      text: "Notes",
      id: 2,
    },
    {
      path: "/finder",
      text: "Finder",
      id: 3,
    },
  ];
  return (
    <section className={`${styles.navbar} `}>
      {links.map((el) => {
        return (
          <NavLink className={styles.navbar__link} to={el.path} key={el.id}>
            {el.text}
          </NavLink>
        );
      })}
    </section>
  );
};

export default Navbar;
