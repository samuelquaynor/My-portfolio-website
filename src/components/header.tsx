import { TypeAnimation } from "react-type-animation";

export default function Header() {
  const handleDownload = () => {
    window.open("/cv/cv.pdf", "_blank");
  };

  return (
    <>
      <header id="header">
        <div className="container">
          <h1>
            <a href="/">Samuel Quaynor</a>
          </h1>

          <h2>
            I'm a passionate {"       "}
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                3000, // Waits 1s
                "Engineer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Freelancer",
                3000, // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", display: "inline-block" }}
            />{" "}
            from Accra, Ghana
          </h2>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link active" href="#header">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a onClick={handleDownload} className="cursor-pointer">
                  Download CV
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
          <div className="social-links">
            <a href="#" className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href="https://github.com/samuelquaynor" className="github">
              <i className="bi bi-github" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-williams-quaynor-b897411b4/"
              className="linkedin"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
