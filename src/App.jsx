import { useEffect } from "react";
import Navbar from "./components/Navbar";
import heroImg from "./assets/imgs/heroImg.png";
import about1 from "./assets/imgs/about1.jpg";
import about2 from "./assets/imgs/about2.jpg";
import Hero from "./components/Hero";
import VisionStatement from "./components/VisionStatement";
import About from "./components/About";
import QuoteSection from "./components/QuoteSection";
import WorkHelps from "./components/WorkHelps";
import Keynotes from "./components/Keynotes";
import Workshops from "./components/Workshops";
import Testimonial from "./components/Testimonial";
import ContactFooter from "./components/ContactFooter";

function App() {
  useEffect(() => {
    // Preload critical images
    const images = [heroImg, about1, about2];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return (
    <div className="bg-cream-50">
      <Navbar />
      <Hero />
      <VisionStatement />
      <About />
      <QuoteSection />
      <WorkHelps />
      <Keynotes />
      <Workshops />
      <Testimonial />
      <ContactFooter />
    </div>
  );
}

export default App;
