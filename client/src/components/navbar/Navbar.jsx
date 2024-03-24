import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { DarkModeContext } from "../../context/darkModeContext";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { darkMode, toggle } = useContext(DarkModeContext);
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1 className={styles.logo}>Taskify</h1>
        </Link>
        <menu className={styles.menuItems}>
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Talent</a>
          </li>
          <li>
            <a href="">Hire</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
        </menu>
        <form className={styles.search}>
          {/* <span className="material-symbols-outlined">search</span> */}
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search..." />
        </form>
      </div>
      <div className={styles.right}>
        <i
          class={darkMode ? "fa-regular fa-sun" : "fa-regular fa-moon"}
          onClick={toggle}
        ></i>
        {/* <i class="fa-regular fa-sun"></i> */}
        {/* <span className="material-symbols-outlined">
            {darkMode ? "light_mode" : "dark_mode"}
          </span> */}
        <i class="fa-regular fa-user"></i>
        {/* <span className="material-symbols-outlined">person</span> */}
        <i class="fa-regular fa-envelope"></i>
        {/* <span className="material-symbols-outlined">email</span> */}
        <i class="fa-regular fa-bell"></i>
        {/* <span className="material-symbols-outlined">notifications</span> */}
        <div className={styles.user}>
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <span>{`${currentUser.firstName} ${currentUser.lastName}`}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
