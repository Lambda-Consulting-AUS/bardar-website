import React from "react";
import { ReactComponent as Illustration } from "../assets/skills.svg";
import BioCard from "../components/BioCard";
import Heading from "../components/Heading";
import { SECTIONS, BIOS } from "../data/data";
import { BioProps } from "../types/types";
import AnimateVisible from "../utils/AnimateVisible";

const BioContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-full md:px-10">
      <Heading
        heading={SECTIONS[3]}
        id="bios"
        illustration={<Illustration className=" max-h-48" />}
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:p-10 justify-around auto-rows-fr flex-wrap w-full">
        {BIOS.map((props: BioProps): JSX.Element => {
          return <BioCard {...props}/>
        })}
      </div>
    </div>
  );
};

export default BioContainer;
