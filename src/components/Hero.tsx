import { Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { ReactComponent as HeroIllustration } from "../assets/hero.svg";
import { HeroProps } from "../types/types";

const Hero: React.FC<HeroProps> = ({
  greetingText,
  greetingDescription,
  buttonText,
}) => {
  const link = window.location.origin + "/articals"

  return (
    <div
      className="relative min-h-screen pt-0 mt-0 antialiased hero bg-gradient-to-b from-primary to-secondary text-primary-content"
      id="home"
    >
      <div className="fill-current custom-shape-divider-bottom-1628871186">
        <HeroIllustration />
      </div>

      <div className="text-justify hero-content text-neutral-content">
        <img
          src="bardar-map.png"
          className="hidden fill-current lg:flex "
          alt="iphone"
          style={{ width: "350px" }}
        />
        <div className="max-w-md ml-10">
          <motion.div
            animate={{ scale: [0.5, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-2 text-5xl font-bold text-white">{greetingText}</h1>
            {
              greetingDescription.map((x) => {
                return <p className="text-white font-semibold">{x}</p>
              })
            }
            <Button sx={{marginTop: 2}} variant="contained" size="large" href={link}>
              Want more now? Checkout Bardar Articles!
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
