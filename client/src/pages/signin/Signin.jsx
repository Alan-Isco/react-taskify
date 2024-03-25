import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import styles from "./signin.module.css";

const Signin = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { currentUser, login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate(
        currentUser.role === "client"
          ? "/users/client/dashboard"
          : "/users/freelancer/dashboard"
      );
    } catch (err) {
      setErr(err.response.data);
      console.log(err);
    }
  };

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
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
