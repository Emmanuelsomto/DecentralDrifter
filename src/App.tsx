import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
