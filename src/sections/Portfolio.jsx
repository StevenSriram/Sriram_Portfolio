import ParticlesDemo from "@/components/custom/ParticlesDemo";
import DockDemo from "@/components/custom/DockDemo";

import Header from "./Header";
import About from "./About";
function Portfolio() {
  return (
    <div className="min-h-screen">
      <ParticlesDemo />
      <DockDemo />
      <div className="flex flex-col items-center justify-center p-2">
        <Header />
        <About />
      </div>
    </div>
  );
}

export default Portfolio;
