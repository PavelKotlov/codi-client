import React from "react";
import {
  Button,
  Card,
  Grid,
  Typography,
  CardContent,
  CardActions,
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
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        sx={{ borderRadius: "16px", boxShadow: 3 }}
        className="box-container"
      >
        {currentCard.type === "CONCEPT" && (
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              className="topic"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {topic.name}
              <LibraryBooksIcon color="inherit" fontSize="large" />
            </Typography>
          </CardContent>
        )}
        {currentCard.type === "CHALLENGE" && (
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              className="topic"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {topic.name}
              <QuizIcon color="inherit" fontSize="large" />
            </Typography>
          </CardContent>
        )}

        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            color="textSecondary"
            className="card-box__front"
          >
            {currentCard.front}
          </Typography>
        </CardContent>
        <Grid container direction="column" alignItems="center" justify="center">
          {viewEditor && <CodeEditor />}
        </Grid>

        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {currentCard.type === "CHALLENGE" && viewEditor && (
            <Button
              className="answer-button"
              size="small"
              onClick={() => setViewEditor(!viewEditor)}
            >
              Code Editor
              <KeyboardDoubleArrowUpIcon className="arrow-icon" />
            </Button>
          )}
          {currentCard.type === "CHALLENGE" && !viewEditor && (
            <Button
              className="answer-button"
              size="small"
              onClick={() => setViewEditor(!viewEditor)}
            >
              Code Editor
              <KeyboardDoubleArrowDownIcon className="arrow-icon" />
            </Button>
          )}
          <Grid
            style={{ display: "flex", justifyContent: "flex-end !important" }}
          ></Grid>
          <Button className="answer-button" size="small" onClick={onClick}>
            View Answer
            <KeyboardDoubleArrowRightIcon className="arrow-icon" />
          </Button>
        </CardActions>
      </Card>
      <Grid item sx={{ width: "700px", marginTop: "-30px" }}>
        <ProgressBar progress={progress} />
      </Grid>
    </Grid>
  );
}
