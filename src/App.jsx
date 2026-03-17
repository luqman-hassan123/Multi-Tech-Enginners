import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import CEOSection from "./components/CEOSection";
import Team from "./components/Team";
import Values from "./components/Values";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <CEOSection />
      <Team />
      <Values />
      <Footer/>
    </>
  );
}
