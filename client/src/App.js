import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import Services from "./pages/services.jsx";
import Contact from "./pages/contact.jsx";
import PortfolioPage from "./pages/portfolio.jsx";

function App() {
  return (
    <div className="App font-serif">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
