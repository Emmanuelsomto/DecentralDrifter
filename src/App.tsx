import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

export default function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <Stack />
      <Projects />
    </div>
  );
}
