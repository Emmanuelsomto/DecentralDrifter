import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}
