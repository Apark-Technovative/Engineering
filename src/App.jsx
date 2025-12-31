
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import WhatWeDo from "./components/WhatWeDo";
import Services from "./components/Services";
import Experts from "./components/Experts";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import CompanyInsights from "./components/CompanyInsights";
import Contact from "./components/Contact";



const Home = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <WhatWeDo />
  <FAQ />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/insights" element={<CompanyInsights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
