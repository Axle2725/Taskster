import CTA from "../components/landingpage/CTA";
import Features from "../components/landingpage/Features";
import Footer from "../components/landingpage/Footer";
import Hero from "../components/landingpage/Hero";
import Navbar from "../components/landingpage/Navbar";
import "./Landing.css";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
