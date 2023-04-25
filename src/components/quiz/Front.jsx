import React from "react";
import {
  Button,
  Card,
  Grid,
  Typography,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import "./quiz.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ProgressBar from "./ProgressBar";
import QuizIcon from "@mui/icons-material/Quiz";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CodeEditor from "./CodeEditor";
import { useContext } from "react";
import { useState } from "react";
import { topicContext } from "../../providers/TopicProvider";

export default function Front(props) {
  const { currentCard, onClick, progress } = props;
  const { topic } = useContext(topicContext);
  const [viewEditor, setViewEditor] = useState(false);

  return (
    <Grid
      container
      // spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      py={5}
    >
      <Grid item>
        <Card
          sx={{
            borderRadius: 5,
            boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
            bgcolor: "primaryCodi.dark",
            overflow: "visible",
            position: "relative",
          }}
          className="box-container"
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "0.5rem",
                color: "primaryCodi.main",
                padding: "1rem",
              }}
            >
              {topic.name}
              {currentCard.type === "CONCEPT" ? (
                <LibraryBooksIcon color="inherit" fontSize="large" />
              ) : (
                <QuizIcon color="inherit" fontSize="large" />
              )}
            </Typography>
          </CardContent>

          <CardContent
            sx={{
              bgcolor: "primaryCodi.main",
              borderRadius: 4,
              mx: 2,
              marginBottom: 2,
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              color="textSecondary"
              className="card-box__front"
              py={5}
              px={2}
            >
              {currentCard.front}
            </Typography>
          </CardContent>

          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            {viewEditor && <CodeEditor />}
          </Grid>
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {currentCard.type === "CHALLENGE" && (
              <Button
                className="answer-button"
                size="small"
                sx={{ color: "accentsCodi.yellow" }}
                onClick={() => setViewEditor((prev) => !prev)}
              >
                Code Editor
                <KeyboardDoubleArrowDownIcon className="arrow-icon" />
              </Button>
            )}
            <Grid
              style={{ display: "flex", justifyContent: "flex-end !important" }}
            ></Grid>
            <Button
              className="answer-button"
              size="small"
              sx={{ color: "accentsCodi.yellow" }}
              onClick={onClick}
            >
              View Answer
              <KeyboardDoubleArrowRightIcon className="arrow-icon" />
            </Button>
          </CardActions>
          <Box
            sx={{
              position: "fixed",
              bottom: -65,
              left: -80,
            }}
          >
            <img
              src={
                `${process.env.PUBLIC_URL}` +
                "/assets/images/light/quiz/plant.png"
              }
              width="150"
            />
          </Box>
        </Card>
      </Grid>
      <Grid item sx={{ width: "60%" }}>
        <ProgressBar progress={progress} />
      </Grid>
    </Grid>
  );
}
