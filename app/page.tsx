import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/ui/Footer";
import { navItems } from "@/data";
import "@/app/globals.css";

export default function Home() {
  return (
    <main
      className={`relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5`}
    >
      <div className="max-w-7xl w-full hide-scrollbar">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
