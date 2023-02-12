import { Box, Typography } from "@mui/material";
import { relative } from "path";
import React from "react";
import Artical from "../components/Artical";
import { reflections } from "../content/Content";

const ArticleContainer: React.FC = () => {
  const article = reflections.find(x => x.title.split(' ').join('-') === window.location.href.split('/').slice(-1)[0])
  if (article === undefined) {
    return <div className="antialiased text-white text-center pt-8">
      404 Page not found
  </div>
  }
  return (
    <Box className="antialiased text-primary bg-gradient-to-r from-info to-secondary" style={{minWidth: "375px", minHeight: "100vh", paddingTop: 8}}>
      <Artical {...article}/>
    </Box>
  );
};

export default ArticleContainer;
