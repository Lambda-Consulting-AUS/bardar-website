import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as HeroIllustration } from "../assets/hero.svg";
import { ReactComponent as Illustration } from "../assets/hero_illustration.svg";
import { HeroProps } from "../types/types";

const Hero: React.FC<HeroProps> = ({
  greetingText,
  greetingDescription,
  buttonText,
}) => {
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
            <h1 className="mb-5 text-5xl font-bold text-neutral">{greetingText}</h1>
            <p className="mb-5 text-neutral">{greetingDescription}</p>
            <Link
              to={"timeline"}
              spy={true}
              smooth={true}
              duration={500}
              className="transition rounded-full cursor-pointer btn btn-neutral"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;