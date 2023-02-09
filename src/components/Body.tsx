import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { reflections } from "../content/Reflections";
import { EntryProps } from "../types/types";
import ButtonAppBar from "./ButtonAppBar";
import Entry from "./Entry";

const Body = () => {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <Container sx={{minWidth: 500}}>
      <Box sx={{ flexGrow: 1, paddingTop: 1 }}>
        <Grid container spacing={4}>
          {reflections.map((x: EntryProps): JSX.Element => {
            return (
              <Grid item xs={16}>
                <Entry {...x}></Entry>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
    </React.Fragment>
  );
};

export default Body;
