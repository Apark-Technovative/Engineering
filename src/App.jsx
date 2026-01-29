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
// import Client from "./components/Clients";
import Careers from "./components/Careers";
import ScrollToTop from "./components/ScrollToTop";
import GetQuote from "./components/GetQuote";
import Pricing from "./components/Pricing";

const Home = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <WhatWeDo />
      {/* <Client /> */}
      <FAQ />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/insights" element={<CompanyInsights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/get-quote" element={<GetQuote />} />
         <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
