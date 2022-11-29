import React from "react";
import { ReactComponent as Illustration } from "../assets/project.svg";
import Heading from "../components/Heading";
import ProjectCard from "../components/FeatureCard";
import { FEATURES, SECTIONS } from "../data/data";

const FeaturesContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-full md:px-10">
      <Heading
        heading={SECTIONS[2]}
        id="features"
        illustration={<Illustration className="max-h-48" />}
      />
      <div 
        className="h-96 md:h-128 sm:p-10 pb-14 masked-overflow"
      >
        <div className="grid gap-6 lg:grid-cols-2 justify-items-center md:grid-cols-1 auto-rows-fr">
          {FEATURES.map(
            (feature) => (
              <ProjectCard
                {...feature}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturesContainer;
