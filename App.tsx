
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { Tours } from './components/Tours';
import { AIPlanner } from './components/AIPlanner';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { Tour } from './types';

const App: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookTour = (tour: Tour) => {
    setSelectedTour(tour);
  };

  const closeBooking = () => {
    setSelectedTour(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar isScrolled={isNavScrolled} />
      
      <main>
        <Hero />
        
        <section id="destinations">
          <Destinations />
        </section>

        <section id="ai-planner" className="bg-emerald-950 py-20 px-4">
          <AIPlanner />
        </section>

        <section id="tours">
          <Tours onBook={handleBookTour} />
        </section>
      </main>

      <Footer />

      {selectedTour && (
        <BookingModal tour={selectedTour} onClose={closeBooking} />
      )}
    </div>
  );
};

export default App;
