import { useContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import styles from "./clientDashboard.module.css";

const ClientDashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    jobTitle: "",
    jobDesc: "",
    category: "",
    duration: "",
    exp: "",
    budget: "",
    location: "",
    file: "",
  });
  const [file, setFile] = useState("");
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("posts/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("posts", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
  const handleSubmit = async (e) => {
    // Submit post request
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    const newInputs = { ...inputs, file: imgUrl };
    mutation.mutate(newInputs);
    setInputs({
      jobTitle: "",
      jobDesc: "",
      category: "",
      duration: "",
      exp: "",
      budget: "",
      location: "",
      file: "",
    });
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(inputs);
  };
  return (
    <div className={styles.clientDash}>
      <div class={styles.optionsContainer}>
        <div class={styles.options}>
          <div class={styles.groupContainer}>
            <a href="#" class="groups" data-target="graphics-design">
              Graphics and design
            </a>
            <div class={styles.dropdownContent} id="graphics-design">
              {/* <!-- Subgroups for Graphics and Design --> */}
              <div className={styles.content}>
                <a href="#">
                  <i class="fas fa-paint-brush"></i> Graphic Design
                </a>
                <a href="#">
                  <i class="fas fa-palette"></i> Logo Design
                </a>
                <a href="#">
                  <i class="fas fa-images"></i> Illustration
                </a>
                <a href="#">
                  <i class="fas fa-desktop"></i> UI/UX Design
                </a>
              </div>
            </div>
          </div>
          <div class={styles.groupContainer}>
            <a href="#" class="groups" data-target="programming-tech">
              Programming and tech
            </a>
            <div class={styles.dropdownContent} id="programming-tech">
              {/* <!-- Subgroups for Programming and Tech --> */}
              <div className={styles.content}>
                <a href="#">
                  <i class="fas fa-laptop-code"></i> Web Development
                </a>
                <a href="#">
                  <i class="fas fa-mobile-alt"></i> Mobile App Development
                </a>
                <a href="#">
                  <i class="fas fa-code"></i> Software Engineering
                </a>
                <a href="#">
                  <i class="fas fa-database"></i> Data Science
                </a>
              </div>
            </div>
          </div>
          <div class={styles.groupContainer}>
            <a href="#" class="groups" data-target="software-dev">
              Software development
            </a>
            <div class={styles.dropdownContent} id="software-dev">
              {/* <!-- Subgroups for Software Development --> */}
              <div className={styles.content}>
                <a href="#">
                  <i class="fas fa-cogs"></i> Agile Development
                </a>
                <a href="#">
                  <i class="fas fa-tools"></i> DevOps
                </a>
                <a href="#">
                  <i class="fas fa-check-circle"></i> Quality Assurance
                </a>
                <a href="#">
                  <i class="fas fa-tasks"></i> Project Management
                </a>
              </div>
            </div>
          </div>
          <div class={styles.groupContainer}>
            <a href="#" class="groups" data-target="manual-labour">
              Manual labour services
            </a>
            <div class={styles.dropdownContent} id="manual-labour">
              {/* <!-- Subgroups for Manual Labour Services --> */}
              <div className={styles.content}>
                <a href="#">
                  <i class="fas fa-hammer"></i> Carpentry
                </a>
                <a href="#">
                  <i class="fas fa-wrench"></i> Plumbing
                </a>
                <a href="#">
                  <i class="fas fa-bolt"></i> Electrical
                </a>
                <a href="#">
                  <i class="fas fa-paint-roller"></i> Painting
                </a>
              </div>
            </div>
          </div>
          <div class={styles.groupContainer}>
            <a href="#" class="groups" data-target="business">
              Business
            </a>
            <div class={styles.dropdownContent} id="business">
              {/* <!-- Subgroups for Business --> */}
              <div className={styles.content}>
                <a href="#">
                  <i class="fas fa-chart-line"></i> Entrepreneurship
                </a>
                <a href="#">
                  <i class="fas fa-money-bill-wave"></i> Finance
                </a>
                <a href="#">
                  <i class="fas fa-briefcase"></i> Marketing
                </a>
                <a href="#">
                  <i class="fas fa-users"></i> Management
                </a>
              </div>
            </div>
          </div>
          <div class={styles.groupContainer}>
            <a href="#" class="groups" data-target="digital-marketing">
              Digital marketing
            </a>
            <div class={styles.dropdownContent} id="digital-marketing">
              {/* <!-- Subgroups for Digital Marketing --> */}
              <div className={styles.content}>
                <a href="#">
                  <i class="fas fa-search"></i> SEO
                </a>
                <a href="#">
                  <i class="fab fa-facebook-square"></i> Social Media Marketing
                </a>
                <a href="#">
                  <i class="fas fa-file-alt"></i> Content Marketing
                </a>
                <a href="#">
                  <i class="fas fa-envelope"></i> Email Marketing
                </a>
              </div>
            </div>
          </div>
          <div class={styles.groupContainer}>
            <a href="#" class="groups" data-target="academic-writing">
              Academic writing
            </a>
            <div class={styles.dropdownContent} id="academic-writing">
              {/* <!-- Subgroups for Academic Writing --> */}
              <div className={styles.content}>
                <a href="#">
                  <i class="fas fa-pencil-alt"></i> Essay Writing
                </a>
                <a href="#">
                  <i class="fas fa-book"></i> Research Papers
                </a>
                <a href="#">
                  <i class="fas fa-graduation-cap"></i> Thesis Writing
                </a>
                <a href="#">
                  <i class="fas fa-edit"></i> Editing & Proofreading
                </a>
              </div>
            </div>
          </div>
          <div class={styles.groupContainer}>
            <a href="#" class="groups" data-target="consulting">
              Consulting
            </a>
            <div class={styles.dropdownContent} id="consulting">
              {/* <!-- Subgroups for Consulting --> */}
              <div className={styles.content}>
                <a href="#">
                  <i class="fas fa-briefcase"></i> Management Consulting
                </a>
                <a href="#">
                  <i class="fas fa-laptop-code"></i> IT Consulting
                </a>
                <a href="#">
                  <i class="fas fa-money-bill-wave"></i> Financial Consulting
                </a>
                <a href="#">
                  <i class="fas fa-balance-scale"></i> Legal Consulting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section1}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 class="tagline">
              <span class="icon">
                <i class="fas fa-check-circle"></i>
              </span>
              Welcome back {currentUser.firstName} Elevate Your needs...Elevate
              your career
            </h1>
            <p>Where resilience meets expertise</p>
            <p class="description">
              Discover endless opportunities to grow and excel with our
              community of verified experts. From specialized Professionals to
              tailored mentorship, we have everything you need to succeed in the
              freelance world
            </p>
            <button
              type="button"
              class="btn btn-primary"
              className={styles.createPost}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Create Post
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Create Post
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div className={styles.left}>
                        <div className={styles.formGroup}>
                          <label htmlFor="jobTitle">Job Title:</label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="jobDescription">
                            Job Description:
                          </label>
                          <textarea
                            id="jobDescription"
                            name="jobDesc"
                            onChange={handleChange}
                            rows={10}
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="category">Choose the category:</label>
                          <select
                            name="category"
                            onChange={handleChange}
                            required
                          >
                            <option>choose...</option>
                            <option value="Onine Work">Online Work</option>
                            <option value="Manual Work">Manual Work</option>
                          </select>
                        </div>
                      </div>
                      <div className={styles.right}>
                        <div className={styles.formGroup}>
                          <label htmlFor="exp">
                            Choose the level of experience:
                          </label>
                          <select name="exp" onChange={handleChange}>
                            <option value="exp">choose...</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Pro">Pro</option>
                          </select>
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="duration">Enter the duration:</label>
                          <input
                            type="text"
                            name="duration"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="budget">Enter your Budget:</label>
                          <input
                            type="text"
                            name="budget"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="">Enter your Location:</label>
                          <input
                            type="text"
                            name="location"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="fie">Enter your file:</label>
                          <input
                            type="file"
                            name="file"
                            onChange={(e) => setFile(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary py-2 px-5"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      class="btn btn-success py-2 px-5"
                      data-bs-dismiss="modal"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <button class="continue-application" id="toggleAbout">
              <div>
                <div class="pencil"></div>
                <div class="folder">
                  <div class="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div class="paper"></div>
                </div>
              </div>
              Create a post
            </button> */}
          </div>
          <div className={styles.right}>
            <div className={styles.cover}>
              <img src="/assets/d.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section2}>
        <div className={styles.categories}>
          <div class={styles.gigs}>
            <h4>Most popular Services</h4>
          </div>
          <div class={styles.choices}>
            <div class={styles.choice} id="choice1">
              Programming and Tech
            </div>
            <div class={styles.choice} id="choice2">
              Digital marketing
            </div>
            <div class={styles.choice} id="choice3">
              Manual labor services
            </div>
            <div class={styles.choice} id="choice4">
              Academic Research
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class={styles.footerContainer}>
          <div class={styles.footerLinks}>
            <div className={styles.links}>
              <h3>Quick Links</h3>

              <a href="#">Home</a>

              <a href="#">About Us</a>

              <a href="#">Services</a>

              <a href="#">Contact Us</a>
            </div>
            <div class={styles.contact}>
              <h3>Contact Us</h3>
              <p>Email: info@taskify.com</p>
              <p>Phone: +254707154666</p>
            </div>
            <div class={styles.socials}>
              <h3>Follow Us</h3>

              <a href="#">
                <i class="fab fa-facebook"></i>
                Taskify Kenya
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
                @taskify_Ke
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
                @taskify_Ke
              </a>
            </div>
          </div>
        </div>
        <div class={styles.bottom}>
          <p>&copy; 2024 Taskify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ClientDashboard;
