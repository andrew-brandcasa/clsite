import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

// Visit Us Pages
import HoursLocation from './pages/visit/HoursLocation';
import TastingsTours from './pages/visit/TastingsTours';
import FAQ from './pages/visit/FAQ';

// Shop Wines Pages
import Shop from './pages/shop/Shop';
import ProductDetail from './pages/shop/ProductDetail';
import CustomLabels from './pages/shop/CustomLabels';

// Winery Events Pages
import EventsCalendar from './pages/events/EventsCalendar';
import EventDetail from './pages/events/EventDetail';
import PurpleFootFestival from './pages/events/PurpleFootFestival';

// Private Events
import PrivateEvents from './pages/private-events/PrivateEvents';

// Supporting Pages
import About from './pages/About';
import Contact from './pages/Contact';
import WhereToBuy from './pages/WhereToBuy';
import Awards from './pages/Awards';
import Press from './pages/Press';
import Trade from './pages/Trade';
import Careers from './pages/Careers';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Accessibility from './pages/Accessibility';
import Blog from './pages/Blog';
import PhotoGallery from './pages/PhotoGallery';
import Directions from './pages/Directions';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Visit Us Routes */}
            <Route path="/visit/hours-location" element={<HoursLocation />} />
            <Route path="/visit/tastings-tours" element={<TastingsTours />} />
            <Route path="/visit/faq" element={<FAQ />} />
            <Route path="/directions" element={<Directions />} />
            
            {/* Shop Wines Routes */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:productName" element={<ProductDetail />} />
            <Route path="/shop/custom-labels" element={<CustomLabels />} />
            
            {/* Winery Events Routes */}
            <Route path="/events/calendar" element={<EventsCalendar />} />
            <Route path="/events/:eventName" element={<EventDetail />} />
            <Route path="/events/purple-foot-festival" element={<PurpleFootFestival />} />
            
            {/* Private Events */}
            <Route path="/private-events" element={<PrivateEvents />} />
            
            {/* Supporting Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/where-to-buy" element={<WhereToBuy />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/press" element={<Press />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/directions" element={<Directions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;