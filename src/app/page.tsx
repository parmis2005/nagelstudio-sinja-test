import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import VideoShowcase from "@/components/VideoShowcase";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <About />
      <VideoShowcase />
      <Reviews />
      <Contact />
    </>
  );
}
