import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PortfolioPage from "./components/portfolio/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio/:id" element={<PortfolioPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
