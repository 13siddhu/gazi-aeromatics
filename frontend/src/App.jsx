import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./components/aboutus";
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import Packaging from './components/Packaging';
import Manufacturing from './components/manufacturing';
import Research from './components/ResearchAndInnovation';
import Sourcing from './components/Sourcing'; 
import Chemicals from './components/Chemicals';
import Essentialoils from './components/Essentialoils';
import Organicoils from './components/Organicoils';


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
        <Route path="/research" element={<Research />} />
        <Route path="/sourcing" element={<Sourcing />} />
        <Route path = "/chemicals" element = {<Chemicals />} />
        <Route path = "/essentialoils" element = {<Essentialoils />} />
        <Route path = "/organicoils" element = {<Organicoils />} />        
      </Routes>
    </Router>
  );
}

export default App;