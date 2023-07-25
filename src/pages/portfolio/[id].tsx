import portfolios from "../../components/portfolio_list.json";
import { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage, app } from "../../../firebase.js";

export default function PortfolioPage({
  portfolioId,
}: {
  portfolioId: string;
}) {
  const [portfolioItems, setPortfolioItems] = useState(portfolios);

  const portfolio = portfolios.find((portfo) => portfo.id == portfolioId);

  useEffect(() => {
    // Function to fetch the storage items
    const getAllImages = async () => {
      try {
        const updatedPortfolioItems = await Promise.all(
          portfolios.map(async (portfolio) => {
            // if (portfolio.ref.length <= 1) {
            const listRef = ref(storage, `portfolio/${portfolio.ref[0]}/`);
            const listResult = await listAll(listRef);
            const imageUrls = await Promise.all(
              listResult.items.map(async (itemRef) => {
                return await getDownloadURL(itemRef);
              })
            );

            // Return a new portfolio object with the updated images array
            return { ...portfolio, images: imageUrls };
            // } else {
            //   let imageUrl2: string[] = [];
            //   portfolio.ref.map(async (port) => {
            //     const listRef = ref(
            //       storage,
            //       `portfolio/${portfolio.ref[0]}/${port}/`
            //     );
            //     const listResult = await listAll(listRef);
            //     // console.log(listResult);
            //     imageUrl2 = await Promise.all(
            //       listResult.items.map(async (itemRef) => {
            //         return await getDownloadURL(itemRef);
            //       })
            //     );
            //   });
            //   const listRef = ref(storage, `portfolio/${portfolio.ref[0]}/`);
            //   const listResult = await listAll(listRef);
            //   const imageUrls = await Promise.all(
            //     listResult.items.map(async (itemRef) => {
            //       return await getDownloadURL(itemRef);
            //     })
            //   );
            //   // Return a new portfolio object with the updated images array
            //   return { ...portfolio, images: imageUrls.concat(imageUrl2) };
            // }
          })
        );

        // Update the state with the updated portfolio items
        setPortfolioItems(updatedPortfolioItems);
      } catch (error) {
        console.error("Error updating portfolio images:", error);
      }
    };

    // Call the function to get the updated portfolio items
    getAllImages();
  }, []);
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
                    {portfolioItems
                      .find((item) => item.id == portfolioId)
                      ?.images.map((url) => (
                        <div className="swiper-slide" key={url}>
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
