import portfolios from "../portfolio_list.json";
import { useParams } from "react-router-dom";

export default function PortfolioPage() {
  const { id } = useParams();
  const portfolio = portfolios.find((portfo) => portfo.id === id);
  return (
    <>
      <main id="main">
        {/* ======= Portfolio Details ======= */}
        <div id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="portfolio-title">{portfolio?.title}</h2>
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    {portfolio?.images.map((url) => (
                      <div className="swiper-slide">
                        <div className="w-full">
                          <img
                            src={url}
                            style={{ maxHeight: "480px" }}
                            alt=""
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
              <div className="col-lg-4 portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {portfolio?.category}
                  </li>
                  <li>
                    <strong>Client</strong>: {portfolio?.client}
                  </li>
                  <li>
                    <strong>Project date</strong>: {portfolio?.date}
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href={portfolio?.url}>{portfolio?.url}</a>
                  </li>
                </ul>
                <p>{portfolio?.description}</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}
      </main>
    </>
  );
}
