import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import styles from "./freelancerdashboard.module.css";
const FreelancerDashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className={styles.freelancerDash}>
      <div className={styles.optionsContainer}>
        <div className={styles.options}>
          <div className={styles.groupContainer}>
            <a href="#" className="groups" data-target="graphics-design">
              Graphics and design
            </a>
            <div className={styles.dropdownContent} id="graphics-design">
              {/* <!-- Subgroups for Graphics and Design --> */}
              <div className={styles.content}>
                <a href="#">
                  <i className="fas fa-paint-brush"></i> Graphic Design
                </a>
                <a href="#">
                  <i className="fas fa-palette"></i> Logo Design
                </a>
                <a href="#">
                  <i className="fas fa-images"></i> Illustration
                </a>
                <a href="#">
                  <i className="fas fa-desktop"></i> UI/UX Design
                </a>
              </div>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <a href="#" className="groups" data-target="programming-tech">
              Programming and tech
            </a>
            <div className={styles.dropdownContent} id="programming-tech">
              {/* <!-- Subgroups for Programming and Tech --> */}
              <div className={styles.content}>
                <a href="#">
                  <i className="fas fa-laptop-code"></i> Web Development
                </a>
                <a href="#">
                  <i className="fas fa-mobile-alt"></i> Mobile App Development
                </a>
                <a href="#">
                  <i className="fas fa-code"></i> Software Engineering
                </a>
                <a href="#">
                  <i className="fas fa-database"></i> Data Science
                </a>
              </div>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <a href="#" className="groups" data-target="software-dev">
              Software development
            </a>
            <div className={styles.dropdownContent} id="software-dev">
              {/* <!-- Subgroups for Software Development --> */}
              <div className={styles.content}>
                <a href="#">
                  <i className="fas fa-cogs"></i> Agile Development
                </a>
                <a href="#">
                  <i className="fas fa-tools"></i> DevOps
                </a>
                <a href="#">
                  <i className="fas fa-check-circle"></i> Quality Assurance
                </a>
                <a href="#">
                  <i className="fas fa-tasks"></i> Project Management
                </a>
              </div>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <a href="#" className="groups" data-target="manual-labour">
              Manual labour services
            </a>
            <div className={styles.dropdownContent} id="manual-labour">
              {/* <!-- Subgroups for Manual Labour Services --> */}
              <div className={styles.content}>
                <a href="#">
                  <i className="fas fa-hammer"></i> Carpentry
                </a>
                <a href="#">
                  <i className="fas fa-wrench"></i> Plumbing
                </a>
                <a href="#">
                  <i className="fas fa-bolt"></i> Electrical
                </a>
                <a href="#">
                  <i className="fas fa-paint-roller"></i> Painting
                </a>
              </div>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <a href="#" className="groups" data-target="business">
              Business
            </a>
            <div className={styles.dropdownContent} id="business">
              {/* <!-- Subgroups for Business --> */}
              <div className={styles.content}>
                <a href="#">
                  <i className="fas fa-chart-line"></i> Entrepreneurship
                </a>
                <a href="#">
                  <i className="fas fa-money-bill-wave"></i> Finance
                </a>
                <a href="#">
                  <i className="fas fa-briefcase"></i> Marketing
                </a>
                <a href="#">
                  <i className="fas fa-users"></i> Management
                </a>
              </div>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <a href="#" className="groups" data-target="digital-marketing">
              Digital marketing
            </a>
            <div className={styles.dropdownContent} id="digital-marketing">
              {/* <!-- Subgroups for Digital Marketing --> */}
              <div className={styles.content}>
                <a href="#">
                  <i className="fas fa-search"></i> SEO
                </a>
                <a href="#">
                  <i className="fab fa-facebook-square"></i> Social Media
                  Marketing
                </a>
                <a href="#">
                  <i className="fas fa-file-alt"></i> Content Marketing
                </a>
                <a href="#">
                  <i className="fas fa-envelope"></i> Email Marketing
                </a>
              </div>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <a href="#" className="groups" data-target="academic-writing">
              Academic writing
            </a>
            <div className={styles.dropdownContent} id="academic-writing">
              {/* <!-- Subgroups for Academic Writing --> */}
              <div className={styles.content}>
                <a href="#">
                  <i className="fas fa-pencil-alt"></i> Essay Writing
                </a>
                <a href="#">
                  <i className="fas fa-book"></i> Research Papers
                </a>
                <a href="#">
                  <i className="fas fa-graduation-cap"></i> Thesis Writing
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i> Editing & Proofreading
                </a>
              </div>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <a href="#" className="groups" data-target="consulting">
              Consulting
            </a>
            <div className={styles.dropdownContent} id="consulting">
              {/* <!-- Subgroups for Consulting --> */}
              <div className={styles.content}>
                <a href="#">
                  <i className="fas fa-briefcase"></i> Management Consulting
                </a>
                <a href="#">
                  <i className="fas fa-laptop-code"></i> IT Consulting
                </a>
                <a href="#">
                  <i className="fas fa-money-bill-wave"></i> Financial
                  Consulting
                </a>
                <a href="#">
                  <i className="fas fa-balance-scale"></i> Legal Consulting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section1}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className="tagline">
              <span className="icon">
                <i className="fas fa-check-circle"></i>
              </span>
              Welcome Back {currentUser.firstName}👋. Let's get you started!
            </h1>
            <p>Let's see what's new today...shall we?</p>
            <p className="description">
              Discover endless opportunities to grow and excel with our
              community of verified experts. From specialized Professionals to
              tailored mentorship, we have everything you need to succeed in the
              freelance world
            </p>

            <button
              onClick={() => navigate("/users/freelancer/client-posts")}
              className={styles.createPost}
            >
              See Posts
            </button>
          </div>

          <div className={styles.right}>
            <div className={styles.cover}>
              <img src="/assets/join.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.footerLinks}>
            <div className={styles.links}>
              <h3>Quick Links</h3>

              <a href="#">Home</a>

              <a href="#">About Us</a>

              <a href="#">Services</a>

              <a href="#">Contact Us</a>
            </div>
            <div className={styles.contact}>
              <h3>Contact Us</h3>
              <p>Email: info@taskify.com</p>
              <p>Phone: +254707154666</p>
            </div>
            <div className={styles.socials}>
              <h3>Follow Us</h3>

              <a href="#">
                <i className="fab fa-facebook"></i>
                Taskify Kenya
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
                @taskify_Ke
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
                @taskify_Ke
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2024 Taskify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FreelancerDashboard;
