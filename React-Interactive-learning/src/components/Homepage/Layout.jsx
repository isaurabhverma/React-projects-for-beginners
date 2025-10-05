// Layout.jsx
import React from "react";
import HeroSection from "./Hero";
import { FeaturesSection } from "./Features";
import Footer from "./Footer";

// import FeaturesSection from "./FeaturesSection";
// import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
