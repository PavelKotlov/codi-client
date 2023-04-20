import { Grid, CircularProgress } from "@mui/material";
import { useContext } from "react";
import React from "react";
import Title from "../components/dashboard/Title";
import Stats from "../components/dashboard/Stats";
import Buttons from "../components/dashboard/Buttons";

import { topicContext } from "../providers/TopicProvider";

const Dashboard = () => {
  const { widgets, name } = useContext(topicContext);

  return (
    <Grid
      container
      columnSpacing={3}
      alignItems="center"
      sx={{
        height: "100vh",
        p: "2%",
        bgcolor: "#E9f5ff",
      }}
    >
      <Grid item xs={12} md={4}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          rowSpacing={7}
        >
          <Grid item>
            <Title name={name} />
          </Grid>
          <Grid item>
            <Buttons />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={8} alignItems="center" sx={{ px: "10%" }}>
        <Stats />
      </Grid>
    </Grid>
  );
};

export default Dashboard;

//  {
//    Object.keys(widgets).length > 0 ? <Stats /> : <CircularProgress />;
//  }
