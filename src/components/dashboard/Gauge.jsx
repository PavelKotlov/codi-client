import { Card, IconButton, Stack } from "@mui/material";
import React from "react";
import ReactEcharts from "echarts-for-react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useContext } from "react";
import { topicContext } from "../../providers/TopicProvider";

const Gauge = ({ onClick }) => {
  // TODO: remove fake value and make it const
  let { maturityPercentage } = useContext(topicContext);
  maturityPercentage = 30;

  const option = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        responsive: true,
        maintainAspectRatio: false,
        center: ["50%", "60%"],
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.5, "#A8C4E5"],
              [0.75, "#7878EA"],
              [1, "#271D30"],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: "inherit",
          },
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: "#fff",
            width: 4,
          },
        },
        axisLabel: {
          show: false,
          color: "inherit",
          distance: 40,
          fontSize: 12,
        },
        detail: {
          valueAnimation: true,
          formatter: "Topic Comprehension",
          color: "#271D30",
          fontSize: 18,
        },
        data: [
          {
            value: maturityPercentage,
          },
        ],
      },
    ],
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
        <div style={{ width: "100%", height: 275 }}>
          <ReactEcharts option={option} />
        </div>
        <IconButton sx={{ borderRadius: 0 }} onClick={onClick}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default Gauge;
