import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import VideoShowcase from "@/components/VideoShowcase";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Services />
      <Booking />
      <Gallery />
      <VideoShowcase />
      <Reviews />
      <Contact />
    </>
  );
}
