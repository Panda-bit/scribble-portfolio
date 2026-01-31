import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
      <Analytics />
    </div>
  )
}

export default App
