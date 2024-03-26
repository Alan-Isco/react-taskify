import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
// import Info from "../info/Info";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);

  const [enableForm, setEnableForm] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery("profile", () =>
    makeRequest.get("users/profile").then((res) => res.data)
  );

  console.log(data);
  const [formValues, setFormValues] = useState(() => {
    if (!data || Object.keys(data).length === 0) {
      return {
        phone: "",
        expert: "",
        jobType: "",
        workinghrs: "",
        availability: "",
        exp: "",
      };
    } else {
      return {
        phone: data.phoneNo || "",
        expert: data.experiences || "",
        jobType: data.jobType || "",
        workinghrs: data.workingHours || "",
        availability: data.availability || "",
        exp: data.experience || "",
      };
    }
  });
  const mutation = useMutation(
    (newProfile) => {
      return makeRequest.put("users/profile", newProfile);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("profile");
      },
    }
  );
  const handleSubmit = async (e) => {
    // Submit post request
    e.preventDefault();
    mutation.mutate(formValues);
    setFormValues(() => {
      if (!data || Object.keys(data).length === 0) {
        return {
          phone: "",
          expert: "",
          jobType: "",
          workinghrs: "",
          availability: "",
          exp: "",
        };
      } else {
        return {
          phone: data.phoneNo || "",
          expert: data.experiences || "",
          jobType: data.jobType || "",
          workinghrs: data.workingHours || "",
          availability: data.availability || "",
          exp: data.experience || "",
        };
      }
    });
    setEnableForm((f) => !f);
  };

  const handleEnableChange = () => {
    setEnableForm((f) => !f);
  };
  const handleCancel = () => {
    setEnableForm((f) => !f);
    setFormValues(() => {
      if (!data || Object.keys(data).length === 0) {
        return {
          phone: "",
          expert: "",
          jobType: "",
          workinghrs: "",
          availability: "",
          exp: "",
        };
      } else {
        return {
          phone: data.phoneNo || "",
          expert: data.experiences || "",
          jobType: data.jobType || "",
          workinghrs: data.workingHours || "",
          availability: data.availability || "",
          exp: data.experience || "",
        };
      }
    });
  };
  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(formValues);
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
          // className="btn btn-primary"
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
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Your Profile
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
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
            <ul className="nav nav-tabs nav-fill">
              <a
                style={{ color: "black" }}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Profile
              </a>
              <a style={{ color: "black" }} className="nav-link" href="#">
                Account
              </a>
              <a style={{ color: "black" }} className="nav-link" href="#">
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
                        placeholder={data?.phoneNo}
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
                        placeholder={data?.experiences}
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
                        placeholder={data?.jobType}
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
                        placeholder={data?.workingHours}
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
                        placeholder={data?.availability}
                        name="availability"
                        onChange={handleChange}
                        value={formValues?.availability}
                        disabled={!enableForm}
                      />
                    </div>
                    <div className={styles.details}>
                      <label htmlFor="exp">Experience</label>
                      <input
                        type="text"
                        placeholder={data?.experience}
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
