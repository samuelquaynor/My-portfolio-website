import portfolios from "../../components/portfolio_list.json";
import { PortfolioDetails } from "../../components/portfolio_model";

export default function PortfolioPage({
  portfolioId,
}: {
  portfolioId: string;
}) {
  const portfolio = portfolios.find((portfo) => portfo.id == portfolioId);
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
                        <img
                          style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          src={url}
                          alt=""
                        />
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

export async function getStaticPaths() {
  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = portfolios.map((portfolio) => ({
    params: { id: portfolio.id },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const portfolioId = params.id;

  return {
    props: {
      portfolioId,
    },
  };
}
