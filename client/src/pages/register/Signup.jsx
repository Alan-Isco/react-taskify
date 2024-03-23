import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./signup.module.css";
const Signup = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

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
          <form onSubmit={handleSubmit}>
            <input
              className={styles.inputs}
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              required
            />
            <input
              className={styles.inputs}
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              required
            />
            <input
              className={styles.inputs}
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
            <input
              className={styles.inputs}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />
            <input
              className={styles.inputs}
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={handleChange}
              required
            />
            <div className={styles.radios}>
              <div>
                <input
                  type="radio"
                  value="client"
                  name="role"
                  checked={inputs.role === "client"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="radio">As Client</label>
              </div>
              <div>
                <input
                  type="radio"
                  required
                  value="freelancer"
                  name="role"
                  checked={inputs.role === "freelancer"}
                  onChange={handleChange}
                />
                <label htmlFor="radio">As Freelancer</label>
              </div>
            </div>
            {err && err}
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
