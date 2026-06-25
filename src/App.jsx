import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import SOC from './pages/SOC';
import Industries from './pages/Industries';
import Compliance from './pages/Compliance';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="cyber-grid"></div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/soc" element={<SOC />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
