import { Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Body from "../components/Body";

const ArticlesContainer: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="antialiased text-white pt-16 bg-gradient-to-r from-info to-secondary" style={{minWidth: "375px", minHeight: "100vh", textAlign: "center"}}>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.3 }}
          ref={ref}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
        >
          <Typography gutterBottom variant="h2" component="div" sx={{fontWeight: 'bold'}}>
            Next level Nightlife
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            A blog by <b>Bardar</b>
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Each week, we give tips on how to have the best possible night out.
          </Typography>
        </motion.div>
        <Body/>
    </div>
  );
};

export default ArticlesContainer;
