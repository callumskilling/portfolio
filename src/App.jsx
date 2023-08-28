import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { PortfolioIndex } from "./pages/PortfolioIndex";
import { PortfolioDetail } from "./pages/PortfolioDetail";
import { Footer } from "./components/Footer/Footer";

export const App = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio">
            <Route index element={<PortfolioIndex />} />
            <Route path=":projectName" element={<PortfolioDetail />} />
          </Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}