import { Search } from "@mui/icons-material";
import { Box, Divider, Grid, IconButton, InputBase, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { reflections } from "../content/Content";
import { EntryProps } from "../types/types";
import ButtonAppBar from "./ButtonAppBar";
import Entry from "./Entry";

const Body = () => {
  return (
    <React.Fragment>
      <Container sx={{minWidth: 500, backgroundColor: "rbga(0, 0, 0, 0)"}}>
      <Box sx={{ flexGrow: 1, paddingY: 4, flex: 1, flexDirection: "column", alignContent: "center"}}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', m: '0 0 32px 0', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ flex: 1, marginLeft: 2 }}
            placeholder="Search Bardar Articles"
            inputProps={{ 'aria-label': 'Search Bardar Articles' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <Search />
          </IconButton>
        </Paper>
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
