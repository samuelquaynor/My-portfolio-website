import portfolios from "./portfolio_list.json";

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                {/* <li data-filter=".filter-card">Card</li> */}
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            {portfolios.map((porfolio) => (
              <div
                className={`col-lg-4 col-md-6 portfolio-item ${
                  porfolio.category == "App" ? "filter-app" : "filter-web"
                } `}
              >
                <div className="portfolio-wrap">
                  <img
                    src={porfolio.images[0]}
                    className="img-fluid"
                    alt="Portfolio Image"
                  />
                  <div key={porfolio.id} className="portfolio-info">
                    <h4>{porfolio.title}</h4>
                    <p>{porfolio.category}</p>
                    <div className="portfolio-links">
                      <a
                        href={porfolio.images[0]}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title={porfolio.title}
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href={`portfolio/${porfolio.id}`}
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className="portfolio-details-lightbox"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
