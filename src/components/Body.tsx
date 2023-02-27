import { Search } from "@mui/icons-material";
import { Box, Grid, IconButton, InputBase, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { reflections } from "../content/Content";
import { EntryProps } from "../types/types";
import { motion, useAnimation } from "framer-motion";
import Entry from "./Entry";
import { useInView } from "react-intersection-observer";

const Body = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <React.Fragment>
      <Container sx={{minWidth: 500, backgroundColor: "rbga(0, 0, 0, 0)"}}>
      <Box sx={{ flexGrow: 1, paddingY: 6, flex: 1, flexDirection: "column", alignContent: "center"}}>
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
          <Paper
            component="form"
            sx={{ p: '2px 4px', mx: 'auto', mb: 6, display: 'flex', alignItems: 'center', width: 400, backgroundColor: 'white'}}
          >
            <InputBase
              sx={{ flex: 1, marginLeft: 2, color: 'black' }}
              placeholder="Search NLN Articles"
              inputProps={{ 'aria-label': 'Search Bardar Articles' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <Search />
            </IconButton>
          </Paper>
        </motion.div>
        <Grid container spacing={4}>
          {reflections.map((x: EntryProps): JSX.Element => {
            return (
              <Entry {...x}></Entry>
            );
          })}
        </Grid>
      </Box>
    </Container>
    </React.Fragment>
  );
};

export default Body;
