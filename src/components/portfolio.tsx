export const Portfolio = () => (
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
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>
      <div className="row portfolio-container">
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="/img/portfolio/heny.png" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a
                  href="/img/portfolio/heny.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
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
        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img
              src="/img/portfolio/materialmax.png"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div className="portfolio-links">
                <a
                  href="/img/portfolio/materialmax.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
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
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img
              src="/img/portfolio/pdafunds.png"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a
                  href="/img/portfolio/pdafunds.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
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
        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img
              src="/img/portfolio/stanbicnsawa.png"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <div className="portfolio-links">
                <a
                  href="/img/portfolio/stanbicnsawa.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
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
        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img
              src="/img/portfolio/pdaformal.png"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <div className="portfolio-links">
                <a
                  href="/img/portfolio/pdaformal.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
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
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img
              src="/img/portfolio/digitalagric.png"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a
                  href="/img/portfolio/digitalagric.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
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
        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img
              src="/img/portfolio/facerog3.png"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <div className="portfolio-links">
                <a
                  href="/img/portfolio/facerog3.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
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
        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img
              src="/img/portfolio/portfolio-8.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <div className="portfolio-links">
                <a
                  href="/img/portfolio/portfolio-8.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
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
        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img
              src="/img/portfolio/portfolio-9.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div className="portfolio-links">
                <a
                  href="/img/portfolio/portfolio-9.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
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
      </div>
    </div>
  </section>
);
