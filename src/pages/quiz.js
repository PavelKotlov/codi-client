import React, { useEffect } from "react";
import Front from "../components/quiz/Front";
import Back from "../components/quiz/Back";
import QuizComplete from "../components/quiz/QuizComplete";
import { useState } from "react";
import { createTheme, Grid, Link, ThemeProvider } from "@mui/material";
import "../components/quiz/quiz.css";
import { topicContext } from "../providers/TopicProvider";
import { useContext } from "react";
import NavMenu from "../components/controllers/menu";
import CloseButton from "../components/controllers/closeButton";

export default function Quiz() {
  const { topic, quizCards, addReview } = useContext(topicContext);
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(1);
  const [initialQuizCards, setInitialQuizCards] = useState();
  const [cardsQueue, setCardsQueue] = useState(quizCards);
  const [currentCard, setCurrentCard] = useState(quizCards[0]);
  const [mode, setMode] = useState("FRONT");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const initialQuizCards = [...quizCards];
    const quizTotal = initialQuizCards.length;
    setInitialQuizCards(quizTotal);
  }, []);

  const updateProgress = (cardsQueue) => {
    return Number(((initialQuizCards - cardsQueue.length) / initialQuizCards) * 100);
  };

  const updateCardsQueue = async (card, response_type) => {
    const updatedCardsQueue = [...cardsQueue];

    if (topic.max_cards > cardsQueue.length) {
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

  const codiTheme = createTheme({});
  return (
    <ThemeProvider theme={codiTheme}>
      <NavMenu />
      <CloseButton link={`/topics/${topic.id}/dashboard`} />
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
      {mode === "COMPLETE" && <QuizComplete />}
    </ThemeProvider>
  );
}
