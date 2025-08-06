import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InformationSection from "./InformationSection";
import AboutHero from "./AboutHero";
import SocialMediaSlider from "../../components/SocialMediaSlider";
import VisionAndMission from "./VisionAndMission";
import Line from "../../components/Line";
import AboutExperience from "./AboutExperience";
import ManufacturingPlantSection from "./ManufacturingPlantSection";
import { useLocation } from "react-router-dom";

function AboutUs() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash; // Get the current hash
    if (sectionId) {
      const element = document.querySelector(sectionId);
      if (element) {
        // Scroll to the section
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <main>
      <Navbar />
      <AboutHero />
      <section id="company">
        <InformationSection />
      </section>
      <Line />
      <section id="vision-mission">
        <VisionAndMission />
      </section>
      <AboutExperience />
      <section id="manufacturing">
        <ManufacturingPlantSection />
      </section>
      <Footer />
      <SocialMediaSlider />
    </main>
  );
}

export default AboutUs;
