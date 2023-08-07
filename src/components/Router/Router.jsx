import React from "react";
import Home from "../../pages/Home/Home";
import Services from "../../pages/Job/Services";
import Legal from "../../pages/Legal/Legal";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import NotFound from "../../pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Legal" element={<Legal />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Router;
