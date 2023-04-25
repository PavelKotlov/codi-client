import { Grid, Button, Badge } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import React from "react";
import { useContext } from "react";
import { topicContext } from "../../providers/TopicProvider";
import { Link } from "react-router-dom";
import "./Buttons.css";
const Buttons = () => {
  const { quizCardsCount, topic } = useContext(topicContext);
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Link to={`/topics/${topic.id}/quiz`} underline="hover" color="inherit">
          <Badge
            badgeContent={quizCardsCount}
            sx={{
              width: "100%",
              color: "primaryCodi.dark",
            }}
            color="secondary"
          >
            <Button
              disabled={quizCardsCount === 0}
              sx={{
                color: "primaryCodi.dark",
                bgcolor: "accentsCodi.yellow",
                height: "50px",
                borderRadius: "40px",
                "&:hover": {
                  bgcolor: "accentsCodi.yellowHover",
                },
              }}
              fullWidth
              variant="contained"
              startIcon={<QuizIcon />}
            >
              {quizCardsCount > 0 ? "Study Now" : "No Cards to Study"}
            </Button>
          </Badge>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link
          to={`/topics/${topic.id}/cards`}
          underline="hover"
          color="inherit"
        >
          <Button
            sx={{
              color: "primaryCodi.dark",
              bgcolor: "primaryCodi.main",
              height: "50px",
              borderRadius: "40px",
              "&:hover": {
                bgcolor: "primaryCodi.mainHover",
              },
            }}
            fullWidth
            variant="contained"
            color="secondary"
            startIcon={<FormatListBulletedIcon />}
          >
            Browse Cards
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Buttons;
