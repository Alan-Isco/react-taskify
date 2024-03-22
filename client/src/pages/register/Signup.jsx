import { Link } from "react-router-dom";
import styles from "./signup.module.css";

const Signup = () => {
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Taskify</h1>
          <p>
            Taskify offers a wide range of job postings, from manual labor to
            online work, providing users with plenty of options. Whether clients
            need help with physical tasks or digital projects, Taskify connects
            them with skilled freelancers. Additionally, Taskify fosters a
            community where users can seek advice on manual labor tasks.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/signin">
            <button>Login</button>
          </Link>
        </div>

        <div className={styles.right}>
          <h1>Register</h1>
          <form action="">
            <input
              className={styles.inputs}
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className={styles.inputs}
              type="text"
              placeholder="Last Name"
              required
            />
            <input
              className={styles.inputs}
              type="email"
              placeholder="Email"
              required
            />
            <input
              className={styles.inputs}
              type="password"
              placeholder="Password"
              required
            />
            <input
              className={styles.inputs}
              type="password"
              placeholder="Confirm password"
              required
            />
            <div className={styles.radios}>
              <div>
                <input type="radio" placeholder="client" required />
                <label htmlFor="radio">As Client</label>
              </div>
              <div>
                <input type="radio" required />
                <label htmlFor="radio">As Freelancer</label>
              </div>
            </div>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
