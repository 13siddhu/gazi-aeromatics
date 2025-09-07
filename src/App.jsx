import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./components/aboutus";
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import Packaging from './components/Packaging';
import Manufacturing from './components/manufacturing';
import Reasearch from './components/ReasearchAndInnovation';
import Sourcing from './components/Sourcing'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/reasearch" element={<Reasearch />} />
        <Route path="/sourcing" element={<Sourcing />} />
      </Routes>
    </Router>
  );
}

export default App;