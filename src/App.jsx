import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/common/FloatingCTA';
import FAQ from './components/common/FAQ';
import Reviews from './components/common/Reviews';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import RoomsPricing from './pages/RoomsPricing';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<RoomsPricing />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Global Sections rendered on all pages */}
          <Reviews />
          <FAQ />
        </main>
        
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
