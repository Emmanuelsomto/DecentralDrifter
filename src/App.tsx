import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
