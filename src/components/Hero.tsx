import { Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import ArticlesContainer from "../containers/ArticlesContainer";
import { HeroProps } from "../types/types";

const Hero: React.FC<HeroProps> = ({
  greetingText,
  greetingDescription,
  buttonText,
}) => {

  return (
    <div
      className="relative min-h-screen pt-0 mt-0 antialiased hero bg-gradient-to-r from-info to-secondary text-primary-content"
      id="home"
    >
      <div className="text-justify hero-content text-neutral-content">
        <motion.div
          animate={{ scale: [0.3, 1], opacity:[0, 1] }}
          transition={{ duration: 0.75 }}
        >
          <motion.div
          whileHover={{ scale: 1.01 }}
          >
             <img
            src="bardar-map.png"
            className="hidden fill-current lg:flex "
            alt="iphone"
            style={{ width: "350px" }}
          />
          </motion.div>
        </motion.div>
        <div className="max-w-md ml-10">
          <motion.div
            animate={{ scale: [0.5, 1] }}
            transition={{ duration: 0.75 }}
          >
            <h1 className="mb-2 text-5xl font-bold text-white">{greetingText}</h1>
            {
              greetingDescription.map((x) => {
                return <p className="text-white font-semibold">{x}</p>
              })
            }
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
