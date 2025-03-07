import ParticlesDemo from "@/components/custom/ParticlesDemo";
import DockDemo from "@/components/custom/DockDemo";

import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
function Portfolio() {
  return (
    <div className="min-h-screen">
      <ParticlesDemo />
      <DockDemo />
      <div className="flex flex-col items-center justify-center p-2">
        <Header />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default Portfolio;
