import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import {
  CTA_TEXT,
  GREETING_DESCRIPTION,
  GREETING_TEXT,
  HERO_IMAGE,
} from "../data/data";
import FeaturesContainer from "./FeaturesContainer";
import BioContainer from "./BioContainer";
import TimelineContainer from "./TimelineContainer";

const HomeContainer: React.FC = () => {
  return (
    <div className="antialiased text-primary" style={{minWidth: "375px"}}>
      <div className="mt-0 pt-0">
        <Hero
          image={HERO_IMAGE}
          greetingText={GREETING_TEXT}
          greetingDescription={GREETING_DESCRIPTION}
          buttonText={CTA_TEXT}
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomeContainer;
