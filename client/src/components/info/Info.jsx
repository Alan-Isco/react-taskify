import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import styles from "./info.module.css";

function Info() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className={styles.info}>
      <div className={styles.content}>
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
        <hr />
        <div className={styles.body}>
          <div
            onClick={() => navigate("/users/profile")}
            className={styles.options}
          >
            <i className="fa-regular fa-user"></i>
            <span>Profile</span>
          </div>
          <div className={styles.options}>
            <i className="fa-regular fa-bell"></i>
            <span>Notification</span>
          </div>
          <div className={styles.options}>
            <i className="fa-solid fa-gears"></i>
            <span>Settings</span>
          </div>
        </div>
        <hr />
        <div className={styles.footer}>
          <div className={styles.options}>
            <i className="fa-solid fa-question"></i>
            <span>Help and Support</span>
          </div>
          <div className={styles.options}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
