export const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Me</p>
      </div>
      <div className="row mt-2">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-map" />
            <h3>My Address</h3>
            <p>Mallam, Gbawe Street</p>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-share-alt" />
            <h3>Social Profiles</h3>
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="google-plus">
                <i className="bi bi-skype" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-envelope" />
            <h3>Email Me</h3>
            <a href="mailto:amwillsquaye@gmail.com">samwillsquaye@gmail.com</a>
          </div>
        </div>
        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-phone-call" />
            <h3>Call Me</h3>
            <p>+233248066710</p>
          </div>
        </div>
      </div>
      <form
        action="forms/contact.php"
        method="post"
        role="form"
        className="php-email-form mt-4"
      >
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required={true}
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required={true}
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required={true}
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            name="message"
            rows={5}
            placeholder="Message"
            required={true}
            defaultValue={""}
          />
        </div>
        <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>
        </div>
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  </section>
);
