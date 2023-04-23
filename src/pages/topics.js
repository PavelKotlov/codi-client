import Axios from "axios";
import React, { useEffect, useState } from "react";
import TopicList from "../components/topics/TopicList";
import Loading from "../components/Loading";
import NavMenu from "../components/controllers/menu";
import { Grid } from "@mui/material";

const Topics = () => {
  const [state, setState] = useState({
    loading: true,
    topics: [],
  });

  useEffect(() => {
    Axios.get(`/api/topics`).then((res) => {
      setState((prev) => ({
        ...prev,
        topics: res.data,
        loading: false,
      }));
    });
  }, []);

  return (
    <>
      <NavMenu />
      {state.loading ? (
        <Loading />
      ) : (
        <Grid
          sx={{
            flowDirection: "column",
            maxHeight: "100vh",
            px: "2%",
            paddingTop: "8%",
            width: "65%",
            margin: "0 auto",
          }}
        >
          <TopicList state={state} setState={setState} />
        </Grid>
      )}
    </>
  );
};

export default Topics;
