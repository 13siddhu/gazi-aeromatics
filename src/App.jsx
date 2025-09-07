import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import aboutus from "./components/aboutGaziAeromatics";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<aboutus />} />
{/*        <Route path="/about" element={<About />} />    */}   
      </Routes>
    </Router>
  );
}

export default App;