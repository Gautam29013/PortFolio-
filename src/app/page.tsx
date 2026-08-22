import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import ConstellationGrid from "@/components/ui/constellation-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative flex flex-col selection:bg-primary/30">
      <div className="fixed inset-0 z-0 opacity-60">
        <ConstellationGrid isBackground={true} />
      </div>
      <Navbar />
      <div id="page-content" className="relative z-10 w-full flex flex-col origin-top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
