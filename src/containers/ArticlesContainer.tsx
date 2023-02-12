import { Typography } from "@mui/material";
import React from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import {
  CTA_TEXT,
  GREETING_DESCRIPTION,
  GREETING_TEXT,
  HERO_IMAGE,
} from "../data/data";

const ArticlesContainer: React.FC = () => {
  return (
    <div className="antialiased text-white pt-16 bg-gradient-to-r from-info to-secondary" style={{minWidth: "375px", minHeight: "100vh", textAlign: "center"}}>
        <Typography gutterBottom variant="h2" component="div" sx={{fontWeight: 'bold'}}>
          Next level Nightlife
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          A blog by <b>Bardar</b>
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          Each week, we give you our tips on how to have the best <br/> time possible on your night out.
        </Typography>
        <Body/>
    </div>
  );
};

export default ArticlesContainer;
