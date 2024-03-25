import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
// import Info from "../info/Info";
import { AuthContext } from "../../context/authContext";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const [toggleProfile, setToggleProfile] = useState(false);
  const [formValues, setFormValues] = useState({
    phone: "",
    expert: "",
    jobType: "",
    workinghrs: "",
    avaiability: "",
    exp: "",
  });
  const [enableForm, setEnableForm] = useState(false);

  const handleEnableChange = () => {
    setEnableForm((f) => !f);
  };
  const handleCancel = () => {
    setEnableForm((f) => !f);
    setFormValues({
      phone: "",
      expert: "",
      jobType: "",
      workinghrs: "",
      avaiability: "",
      exp: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
    setFormValues({
      phone: "",
      expert: "",
      jobType: "",
      workinghrs: "",
      avaiability: "",
      exp: "",
    });
    setEnableForm((f) => !f);
  };
  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formValues);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1 className={styles.logo}>Taskify</h1>
        </Link>

        <form className={styles.search}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search..." />
        </form>
      </div>
      <div className={styles.right}>
        <i
          className={darkMode ? "fa-regular fa-sun" : "fa-regular fa-moon"}
          onClick={toggle}
        ></i>
        <div
          // class="btn btn-primary"
          className={styles.user}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>

        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Your Profile
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div className={styles.header}>
              <div className={styles.image}>
                <img
                  src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className={styles.title}>
                <span>
                  Hey {currentUser.firstName} {currentUser.lastName}
                </span>
              </div>
            </div>
            <ul class="nav nav-tabs nav-fill">
              <a
                style={{ color: "black" }}
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                Profile
              </a>
              <a style={{ color: "black" }} class="nav-link" href="#">
                Account
              </a>
              <a style={{ color: "black" }} class="nav-link" href="#">
                Logout
              </a>
            </ul>
            <div className={styles.profileDetails}>
              <h2>Your details</h2>
              <form className={styles.canvasForm}>
                <div className={styles.formBody}>
                  <div className={styles.left}>
                    <div className={styles.details}>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        onChange={handleChange}
                        value={formValues.phone}
                        disabled={!enableForm}
                      />
                    </div>
                    <div className={styles.details}>
                      <label htmlFor="expert">Expert in</label>
                      <input
                        type="text"
                        placeholder="Expert in"
                        name="expert"
                        value={formValues.expert}
                        onChange={handleChange}
                        disabled={!enableForm}
                      />
                    </div>
                    <div className={styles.details}>
                      <label htmlFor="jobType">Job type</label>
                      <input
                        type="text"
                        placeholder="Job type"
                        name="jobType"
                        value={formValues.jobType}
                        onChange={handleChange}
                        disabled={!enableForm}
                      />
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.details}>
                      <label htmlFor="workinghrs">Working Hours</label>
                      <input
                        type="text"
                        placeholder="Working hours"
                        name="workinghrs"
                        value={formValues.workinghrs}
                        onChange={handleChange}
                        disabled={!enableForm}
                      />
                    </div>
                    <div className={styles.details}>
                      <label htmlFor="availability">Availability</label>
                      <input
                        type="text"
                        placeholder="Availability"
                        name="avaiability"
                        onChange={handleChange}
                        value={formValues.avaiability}
                        disabled={!enableForm}
                      />
                    </div>
                    <div className={styles.details}>
                      <label htmlFor="exp">Experience</label>
                      <input
                        type="text"
                        placeholder="Experience"
                        name="exp"
                        onChange={handleChange}
                        value={formValues.exp}
                        disabled={!enableForm}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.toggleBtn}>
                  {enableForm ? (
                    <>
                      <button
                        type="button"
                        className={styles.btnGrad}
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                      <button
                        className={styles.btnGrad}
                        onClick={handleSubmit}
                        type="submit"
                      >
                        Submit
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={handleEnableChange}
                      className={styles.btnGrad}
                      type="button"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
