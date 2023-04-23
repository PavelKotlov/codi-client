import { Grid, Button, Badge, Typography } from "@mui/material";
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
            color="primary"
            sx={{ width: "100%" }}
          >
            <Button
              disabled={quizCardsCount === 0}
              sx={{
                color: "#271D30",
                bgcolor: "#FFD22D",
                height: "50px",
                borderRadius: "40px",
              }}
              fullWidth
              variant="contained"
              startIcon={<QuizIcon />}
            >
              {quizCardsCount > 0 ? 'Study Now' : 'No Cards to Study' }
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
            sx={{ bgcolor: "#27E0C0", height: "50px", borderRadius: "40px" }}
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
