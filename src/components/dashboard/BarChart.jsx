import { Card, IconButton, Stack } from "@mui/material";
import React from "react";
import ReactEcharts from "echarts-for-react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useContext } from "react";
import { topicContext } from "../../providers/TopicProvider";

const BarChart = ({ onClick }) => {
  const { ease } = useContext(topicContext);

  let easeFactors = ease.map((e) => e.ease_factor);
  let counts = ease.map((e) => e.count);

  easeFactors = [1.8, 2.3, 2.4, 2.5, 2.65, 2.8];
  counts = [1, 3, 8, 20, 4, 2];

  const option = {
    grid: {
      show: false,
      bottom: 5,
      top: 60,
      height: 200,
    },
    xAxis: {
      name: "Ease",
      type: "category",
      data: easeFactors,
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    yAxis: {
      name: "Cards",
      type: "value",
      show: true,
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
      },
    },
    series: [
      {
        data: counts,
        type: "bar",
        barWidth: "40%",
        color: "#271D30",
      },
    ],
    title: {
      text: "Ease of Comprehension",
      left: "center",
    },
  };

  return (
    <Card
      sx={{
        bgcolor: "#fff",
        display: "flex",
        borderRadius: "25px",
        width: "90%",
        margin: "0 auto",
        boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
      }}
    >
      <Stack direction={"row"}>
        <IconButton sx={{ borderRadius: 0 }} onClick={onClick}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <div style={{ width: "110%", height: 275 }}>
          <ReactEcharts option={option} />
        </div>
        <IconButton sx={{ borderRadius: 0 }} onClick={onClick}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default BarChart;
