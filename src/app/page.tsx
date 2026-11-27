import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Initiatives from "@/components/Initiatives";
import Impact from "@/components/Impact";
import Founders from "@/components/Founders";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Initiatives />
        <Impact />
        <Founders />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
