import styles from "./home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.top}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a
              className="navbar-brand d-flex align-items-center"
              href="index.html"
            >
              {/* <!-- <img src="images/coffee-beans.png" className="navbar-brand-image img-fluid" alt="Taskify Homepage"> --> */}
              Taskify
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-auto">
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_2">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_3">
                    Our Menu
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_4">
                    Reviews
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_5">
                    Contact
                  </a>
                </li>
              </ul>

              <div className="ms-lg-3">
                <a
                  className="btn custom-btn custom-border-btn"
                  href="reservation.html"
                >
                  Log In
                  <i className="bi-arrow-up-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className={styles.join}>
          <p className={styles.ex}>The Leading</p>
          <p className={styles.ex}>Freelancing</p>
          <p className={styles.ex}>Platform</p>
        </div>
        <div className={styles.arrowContainer}>
          <a href="#section1" className="scroll-down">
            <div className={styles.arrow}></div>
          </a>
        </div>
      </div>
      <section className="about-section section-padding" id="section_2">
        <div className="section-overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="ratio ratio-1x1">
                <video autoPlay loop muted className="custom-video" poster>
                  <source
                    src="videos/production_id_4116779 (2160p).mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div className="about-video-info d-flex flex-column">
                  <h4 className="mt-auto">Best job website in Kenya.</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
              <em className="text-white">Taskify.com</em>

              <h2 className="text-white mb-3">Taskify Platform</h2>
              <p className="text-white">
                Taskify is a dynamic platform where clients and freelancers
                converge to collaborate and connect seamlessly. It serves as a
                hub for efficient communication and interaction between
                individuals seeking services and those offering their skills.
              </p>
              <p className="text-white">
                Taskify fosters a vibrant community where tasks are accomplished
                with ease. Join us today and experience the convenience of
                connecting with the right talent or finding the perfect job
                match.
              </p>

              <a
                href="#barista-team"
                className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.reviewsSection} ${styles.sectionPadding} ${styles.sectionBg}`}
        id="section_4"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
              <em className="text-white">Reviews by Clients</em>

              <h2 className="text-white">Testimonials</h2>
            </div>

            <div className={styles.timeline}>
              <div
                className={`${styles.timelineContainer} ${styles.timelineContainerLeft}`}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.reviewsBlock}>
                    <div
                      className={`${styles.reviewsBlockImageWrap} d-flex align-items-center`}
                    >
                      <img
                        src="/images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg"
                        className={`${styles.reviewsBlockImage} img-fluid`}
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-white mb-0">Sandra</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>

                    <div className={styles.reviewsBlockInfo}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <div className={`d-flex ${styles.borderTop} pt-3 mt-4`}>
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>

                        <div className="reviews-group ms-auto">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.timelineContainer} ${styles.timelineContainerRight}`}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.reviewsBlock}>
                    <div
                      className={`${styles.reviewsBlockImageWrap} d-flex align-items-center`}
                    >
                      <img
                        src="/images/reviews/senior-man-white-sweater-eyeglasses.jpg"
                        className={`${styles.reviewsBlockImage} img-fluid`}
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-white mb-0">Don</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>

                    <div className={styles.reviewsBlockInfo}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>

                        <div className={`${styles.reviewsGroup} ms-auto`}>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.timelineContainer} ${styles.timelineContainerLeft}`}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.reviewsBlock}>
                    <div
                      className={`${styles.reviewsBlockImageWrap} d-flex align-items-center`}
                    >
                      <img
                        src="/images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg"
                        className={`${styles.reviewsBlockImage} img-fluid`}
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-white mb-0">Olivia</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>

                    <div className={styles.reviewsBlockInfo}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>

                        <div className={`${styles.reviewsGroup} ms-auto`}>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
