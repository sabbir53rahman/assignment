import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Work } from "@/components/Work";

export default function Home() {
    return (
      <>
        <div>
          <Navbar/>
          <Hero/>
          <About/>
          <Work/>
          <Contact/>
        </div>
      </>
    );
  }
