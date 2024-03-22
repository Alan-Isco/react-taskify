import { Link } from "react-router-dom";
import styles from "./signin.module.css";

const Signin = () => {
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Taskify</h1>
          <p>
            Taskify prioritizes user flexibility, allowing freelancers and
            clients to tailor their experience to their needs. With an intuitive
            interface and comprehensive job listings, Taskify makes it easy to
            find the perfect match. Users can exercise their freedom of choice,
            making informed decisions to achieve their goals efficiently.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/signup">
            <button>Register</button>
          </Link>
        </div>

        <div className={styles.right}>
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
