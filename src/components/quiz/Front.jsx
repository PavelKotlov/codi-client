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
import useApplicationData from "../../hooks/useApplicationData";
import ProgressBar from "./ProgressBar";
import QuizIcon from "@mui/icons-material/Quiz";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

export default function Front(props) {
  const { currentCard, onClick, progress } = props;
  const { state } = useApplicationData();

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
              {state.topic.name}
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
              {state.topic.name}
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

        <CardActions>
          <Button className="answer-button" size="small" onClick={onClick}>
            View Answer
            <KeyboardDoubleArrowRightIcon className="arrow-icon" />
          </Button>
        </CardActions>
      </Card>

      <Grid sx={{ width: "700px" }}>
        <ProgressBar color="secondary" progress={progress} />
      </Grid>
    </Grid>
  );
}
