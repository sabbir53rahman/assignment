import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
      <>
        <div>
          <Navbar/>
          <Hero/>
          <About/>
          <Contact/>
        </div>
      </>
    );
  }
