import About from "./about";
import { Contact } from "./contact";
import Header from "./header";
import Portfolio from "./portfolio";
import { Resume } from "./resume";
import { Services } from "./services";

function Home() {
  return (
    <>
      <Header />
      
      {/* End Header */}
      {/* ======= About Section ======= */}
      <About />
      {/* End About Section */}
      {/* ======= Resume Section ======= */}
      <Resume />
      {/* End Resume Section */}
      {/* ======= Services Section ======= */}
      <Services />
      {/* End Services Section */}
      {/* ======= Portfolio Section ======= */}
      <Portfolio />
      {/* End Portfolio Section */}
      {/* ======= Contact Section ======= */}
      <Contact />
    </>
  );
}

export default Home;
