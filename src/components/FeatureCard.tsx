import { motion } from "framer-motion";
import React from "react";
import { FeatureProps } from "../types/types";

const FeatureCard: React.FC<FeatureProps> = ({
  id,
  name,
  description
}) => {
  return (
    <motion.div 
    className={"card bg-white w-full shadow-lg"} 
    style={{minWidth: '300px'}} transition={{ duration: 0.25 }} key={id}>
      <div className="card-body bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
        <h2 className="card-title">{name}</h2>
        {description.map((x: string): JSX.Element => {
          return <p>{x}</p>
        })}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
