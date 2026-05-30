import './App.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useTextReveal } from './hooks/useTextReveal';
import NoiseOverlay from './components/NoiseOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Centrepiece from './components/Centrepiece';
import Lifestyle from './components/Lifestyle';
import Programs from './components/Programs';
import HowWeDoIt from './components/HowWeDoIt';
import Pillars from './components/Pillars';
import Testimonials from './components/Testimonials';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  useScrollReveal();
  useTextReveal();

  return (
    <>
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <Centrepiece />
      <Lifestyle />
      <Programs />
      <HowWeDoIt />
      <Pillars />
      <Testimonials />
      <DemoSection />
      <Footer />
      <BackToTop />
      <CustomCursor />
    </>
  );
}

export default App;
