import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SocialMediaSlider from "../../components/SocialMediaSlider";
import MapComponent from "./MapComponent";

function Internation() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow overflow-auto">
        <MapComponent />
      </div>
      <div className="mt-auto">
        <Footer />
        <SocialMediaSlider />
      </div>
    </main>
  );
}

export default Internation;
