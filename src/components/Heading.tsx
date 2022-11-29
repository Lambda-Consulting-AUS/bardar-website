import React from "react";
import { HeadingProps } from "../types/types";

const Heading: React.FC<HeadingProps> = ({ heading, id, illustration }) => {
  return (
    <div className="grid mt-2 auto-rows-fr" id={id}>
      {/* <div className="hidden pt-3 antialiased lg:flex">
        {illustration}
      </div> */}
      <h2 className="pt-20 pb-10 sm:px-10 text-5xl font-bold md:text-center text-accent">{heading}</h2>
    </div>
  );
};

export default Heading;
