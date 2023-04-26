import React, { useEffect } from "react";
import Front from "../components/quiz/Front";
import Back from "../components/quiz/Back";
import { useState } from "react";
import { Box, Button, createTheme, Grid } from "@mui/material";
import "../components/quiz/quiz.css";
import { topicContext } from "../providers/TopicProvider";
import { useContext } from "react";
import NavMenu from "../components/controllers/menu";
import CloseButton from "../components/controllers/CloseButton";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const { topic, quizCards, addReview } = useContext(topicContext);
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(1);
  const [initialQuizCards, setInitialQuizCards] = useState();
  const [cardsQueue, setCardsQueue] = useState(quizCards);
  const [currentCard, setCurrentCard] = useState(quizCards[0]);
  const [mode, setMode] = useState("FRONT");
  const [progress, setProgress] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {
    const initialQuizCards = [...quizCards];
    const quizTotal = initialQuizCards.length;
    setInitialQuizCards(quizTotal);
  }, []);

  const updateProgress = (cardsQueue) => {
    return Number(
      ((initialQuizCards - cardsQueue.length) / initialQuizCards) * 100
    );
  };

  const updateCardsQueue = async (card, response_type) => {
    const updatedCardsQueue = [...cardsQueue];

    if (topic.max_cards >= cardsQueue.length) {
      if (response_type === "EASY") {
        updatedCardsQueue.splice(index, 1);
      }
      if (response_type === "HARD" && card.status === "GRADUATED") {
        updatedCardsQueue.splice(index, 1);
      }
      if (response_type === "GOOD" && card.status !== "NEW") {
        updatedCardsQueue.splice(index, 1);
      }
    }

    try {
      const updatedCard = await addReview(topic, card, response_type);
      const indexToUpdate = updatedCardsQueue.findIndex((card) => {
        return card.id === updatedCard.id;
      });
      if (indexToUpdate !== -1) {
        updatedCardsQueue[indexToUpdate] = updatedCard;
      }
      setCardsQueue(updatedCardsQueue);
    } catch (error) {
      console.log(error);
    }
    return updatedCardsQueue;
  };

  const handleClick = async (response) => {
    const updatedQueue = await updateCardsQueue(currentCard, response);
    setCounter((prev) => prev + 1);
    setProgress(updateProgress(updatedQueue));
    setIndex((prev) => {
      let nextIndex = prev + 1 >= updatedQueue.length ? 0 : prev + 1;
      while (!updatedQueue[nextIndex] && nextIndex > 0) {
        nextIndex--;
      }
      if (nextIndex < 0 || !updatedQueue[nextIndex]) {
        setMode("COMPLETE");
      }
      setCurrentCard(updatedQueue[nextIndex]);
      return nextIndex;
    });

    if (
      mode !== "COMPLETE" &&
      counter < topic.max_cards &&
      updatedQueue.length >= 1
    ) {
      setMode("FRONT");
    } else {
      setMode("COMPLETE");
    }
  };

  return (
    <Box
      height="100vh"
      bgcolor="background.light"
      sx={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + mode === "COMPLETE"
            ? "/assets/images/light/quiz/awesomeComplete.png"
            : "/assets/images/light/quiz/quiz-bg.png"
        })`,
        backgroundSize: "cover",
      }}
    >
      <NavMenu showSettings={false} />
      <CloseButton link={`/topics/${topic.id}/dashboard`} isDefault={true} />
      <Grid container direction="column" alignItems="center">
        <Grid>
          {currentCard && mode === "FRONT" && (
            <Front
              currentCard={currentCard}
              progress={progress}
              onClick={() => setMode("BACK")}
            />
          )}
          {currentCard && mode === "BACK" && (
            <Back
              currentCard={currentCard}
              progress={progress}
              handleClick={handleClick}
            />
          )}
        </Grid>
      </Grid>
      {mode === "COMPLETE" && (
        <Button
          variant="contained"
          color="secondary"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            marginRight: 40,
            marginBottom: 20,
            width: 200,
            height: 60,
            fontSize: 32,
            px: 5,
            borderRadius: 5,
            bgcolor: "accentsCodi.pink",
            "&:hover": {
              bgcolor: "accentsCodi.pinkHover",
            },
            color: "primaryCodi.main",
            boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
          }}
          onClick={() => {
            navigate(`/topics/${topic.id}/dashboard`);
          }}
        >
          Exit
        </Button>
      )}
    </Box>
  );
}
