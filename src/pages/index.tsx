import About from "../components/about";
import { Contact } from "../components/contact";
import Header from "../components/header";
import Portfolio from "../components/portfolio";
import { Resume } from "../components/resume";
import { Services } from "../components/services";

export default function Home() {
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
