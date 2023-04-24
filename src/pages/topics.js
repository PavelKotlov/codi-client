import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import TopicList from "../components/topics/TopicList";
import Loading from "../components/Loading";
import NavMenu from "../components/controllers/menu";
import { Grid } from "@mui/material";
import Close from "../components/controllers/closeButton";
import { UserContext } from "../providers/UserProvider";

const Topics = () => {
  const { token } = useContext(UserContext);
  const [state, setState] = useState({
    loading: true,
    topics: [],
  });

  console.log("Token in topics", token);
  useEffect(() => {
    axios
      .get(`/api/topics`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setState((prev) => ({
          ...prev,
          topics: res.data,
          loading: false,
        }));
      });
  }, []);

  return (
    <>
      <Close link={"/"} />
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
