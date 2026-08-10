import Navbar from "./components/Navbar";
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
