import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Content Layer */}
      <div className="container mx-auto px-8">
        <Navbar />
        <div className="mt-20">
          <Hero />
          <Technologies />
          <Experience />
          <Projects />
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default App;
