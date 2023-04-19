import React from "react";
import { getFlashcardsForQuiz } from "../../helpers/selector_quiz";
import useApplicationData from "../../hooks/useApplicationData";
import useVisualMode from "../../hooks/useVisualMode";
import Front from "./Front";
import Back from "./Back";
import QuizComplete from "./QuizComplete";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider} from '@mui/material';

export default function Quiz(props) {
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(1);
  const [cardsQueue, setCardsQueue] = useState([]);

  const { state, addReview } = useApplicationData();
  const { mode, transition } = useVisualMode("FRONT");

  const currentCard = cardsQueue[index];

  // useEffect(() => {
  //   setCardsQueue(getFlashcardsForQuiz(state));
  //   console.log("cardsQueue", cardsQueue);
  // }, [state]);

  useEffect(() => {
    const filteredCards = getFlashcardsForQuiz(state);
    setCardsQueue((prev) => {
      const newCardsQueue = [
        ...prev,
        ...filteredCards.filter((card) => !prev.includes(card)),
      ];
      return newCardsQueue.filter(
        (card) => !card.due_at || Date.parse(card.due_at) <= Date.now()
      );
    });
  }, [state]);

  const updateCardsQueue = async (card, response_type) => {
    const updatedCardsQueue = [...cardsQueue];

    if (state.topic.max_cards > cardsQueue.length) {
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
      const updatedCard = await addReview(state.topic, card, response_type);
      const indexToUpdate = updatedCardsQueue.findIndex((card) => {
        return card.id === updatedCard.id;
      });

      if (indexToUpdate !== -1) {
        updatedCardsQueue[indexToUpdate] = updatedCard;
        setCardsQueue(updatedCardsQueue);
        console.log("updatedCardsQueue:", updatedCardsQueue);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (response) => {
    await updateCardsQueue(currentCard, response);
    setCounter(prev => prev + 1);
    setIndex(prev => prev + 1 >= cardsQueue.length ? 0 : prev + 1);
    console.log('counter', counter, 'index', index)

    if ((state.topic.max_cards > cardsQueue.length && counter >= state.topic.max_cards) || (state.topic.max_cards <= cardsQueue.length && index >=  cardsQueue.length - 1)) {
      transition("COMPLETE");
    } else {
      transition("FRONT");
    }
  };

  const codiTheme = createTheme({});

  return (
    <ThemeProvider theme={codiTheme}>
      {mode === "COMPLETE" && <QuizComplete />}
      {currentCard && mode === "FRONT" && (
        <Front
          currentCard={currentCard}
          onClick={() => transition("BACK")}
        />
      )}
      {currentCard && mode === "BACK" && (
        <Back currentCard={currentCard} handleClick={handleClick} />
      )}
    </ThemeProvider>
  );
}
