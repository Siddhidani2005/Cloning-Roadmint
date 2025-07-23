import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Topics from "./components/Topics";
import Quote from "./components/Quote";
import Stats from "./components/Stats";
import Feature from "./components/Feature";
import Faq  from "./components/Faq";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Topics />
      <Quote />
      <Stats />
      <Feature />
      <Faq />
      <Footer />
    </div>
  );
}

