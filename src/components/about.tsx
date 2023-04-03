export default function About() {
  return (
    <>
      <section id="about" className="about">
        {/* ======= About Me ======= */}
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/me.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Full Stack &amp; Software Engineer</h3>
              <p className="fst-italic">
                As a Full Stack Software Developer with 4+ years of experience,
                I am proficient in modern technologies such asPython, Django,
                Node.js, React.js, and Flutter. I have a strong focus on user
                experience and interface design, and I utilize agile development
                methodologies to deliver high-quality results. In addition, I
                have experience in developing APIs as part of web and mobile
                applications, including integration with third-party services
                and platforms. I am a proactive problem-solver with a track
                record of success in web and mobile development, including API
                development.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Birthday:</strong> <span>16 November 2001</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong>{" "}
                      <a href="https://6426de4b7e857600089dfcd2--quaynorcodes.netlify.app/">
                        quaynorcodes
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Phone:</strong> <span>+233248066710</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Whatsapp:</strong>{" "}
                      <a href="https://wa.me/+233504638295">+233504638295</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>City:</strong> <span>Accra, Ghana</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Age:</strong> <span>21</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Degree:</strong> <span>Bachelor's</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email:</strong>{" "}
                      <a href="mailto:samwillsquaye@gmail.com">
                        samwillsquaye@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Me */}
        {/* ======= Counts ======= */}
        <div className="counts container">
          <div className="flex flex-row justify-evenly">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={49}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={58}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1463}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Hours Of Support</p>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-award" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={24}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Awards</p>
              </div>
            </div> */}
          </div>
        </div>
        {/* End Counts */}
        {/* ======= Skills  ======= */}
        <div className="skills container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  CSS <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  PYTHON <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  DART <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Node.js <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Skills */}
        {/* ======= Interests ======= */}
        <div className="interests container">
          <div className="section-title">
            <h2>Interests</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
                <h3>Flutter</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-bar-chart-box-line"
                  style={{ color: "#5578ff" }}
                />
                <h3>Nest.js</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-calendar-todo-line"
                  style={{ color: "#e80368" }}
                />
                <h3>React.js</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i
                  className="ri-paint-brush-line"
                  style={{ color: "#e361ff" }}
                />
                <h3>Tailwind</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-database-2-line"
                  style={{ color: "#47aeff" }}
                />
                <h3>Next.js</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-gradienter-line"
                  style={{ color: "#ffa76e" }}
                />
                <h3>Vue.js</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-file-list-3-line"
                  style={{ color: "#11dbcf" }}
                />
                <h3>Next.js</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-price-tag-2-line"
                  style={{ color: "#4233ff" }}
                />
                <h3>Django/ DRF</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-anchor-line" style={{ color: "#b2904f" }} />
                <h3>Firebase</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-disc-line" style={{ color: "#b20969" }} />
                <h3>Figma/ Adobe XD</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-base-station-line"
                  style={{ color: "#ff5828" }}
                />
                <h3>AWS/ Google Cloud</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-fingerprint-line"
                  style={{ color: "#29cc61" }}
                />
                <h3>Docker</h3>
              </div>
            </div>
          </div>
        </div>
        {/* End Interests */}
        {/* ======= Testimonials ======= */}
        <div className="testimonials container">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Working with Samuel was an absolute pleasure. Their
                    expertise in coding and problem-solving helped us streamline
                    our software development process and deliver high-quality
                    products on time. I highly recommend Samuel for any software
                    development needs.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Philip Afful</h3>
                  <h4>Ceo &amp; Founder (Heny Tech Solutions & PDA FUNDS)</h4>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    I've had the pleasure of collaborating with Samuel on
                    multiple projects, and their technical skills and attention
                    to detail have never ceased to amaze me. They always go
                    above and beyond to deliver top-notch software that exceeds
                    expectations. I wouldn't hesitate to work with them again.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Eugene Adortsu</h3>
                  <h4>CTO (Heny Tech Solutions)</h4>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    If you're looking for a talented and dedicated software
                    developer, look no further than Samuel. Their ability to
                    think outside the box and come up with creative solutions to
                    complex problems is truly impressive. I've seen firsthand
                    how their contributions have elevated the quality of our
                    software and improved our overall workflow.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-3.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Philemon Asempa</h3>
                  <h4>Tech Lead (Stanbic Bank)</h4>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    I had the pleasure of working with Samuel on a particularly
                    challenging project, and I can confidently say that he is
                    one of the most skilled developers I've ever worked with.
                    They were able to quickly grasp the requirements and
                    implement a solution that not only met our needs but
                    exceeded them. I highly recommend Samuel for any software
                    development project.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-4.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Emmanuel</h3>
                  <h4>Lead IT (Conpro Limited)</h4>
                </div>
              </div>
              {/* End testimonial item */}
              {/* <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-5.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div> */}
              {/* End testimonial item */}
            </div>
            <div className="swiper-pagination" />
          </div>
          <div className="owl-carousel testimonials-carousel"></div>
        </div>
        {/* End Testimonials  */}
      </section>
    </>
  );
}
