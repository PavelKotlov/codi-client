import React from "react";
import { getFlashcardsForQuiz } from "../../helpers/selector_quiz";
import useApplicationData from "../../hooks/useApplicationData";
import Front from "./Front";
import Back from "./Back";
import QuizComplete from "./QuizComplete";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider} from '@mui/material';

export default function Quiz(props) {
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(1);
  const [cardsQueue, setCardsQueue] = useState([]);
  const [currentCard, setCurrentCard] = useState();
  const [mode, setMode] = useState("FRONT");
  const { state, addReview, getFlashcards } = useApplicationData();

  useEffect(() => {
    getFlashcards(state.topic.id)
    .then((data) => {
      const filteredCards = getFlashcardsForQuiz(state, data);
      setCardsQueue((prev) => {
        const newCardsQueue = [
          ...prev,
          ...filteredCards.filter((card) => !prev.includes(card)),
        ];
        const cardsQueue = newCardsQueue.filter(
          (card) => !card.due_at || Date.parse(card.due_at) <= Date.now()
        );
        setCurrentCard(cardsQueue[index]);
        return cardsQueue;
      });
    })
   
  }, []);

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
      }
      setCardsQueue(updatedCardsQueue);
    } catch (error) {
      console.log(error);
    }
    return updatedCardsQueue;
  };


  const handleClick = async (response) => {
    const updatedQueue = await updateCardsQueue(currentCard, response);
    setCounter(prev => prev + 1);
    setIndex(prev => {
      let nextIndex = prev + 1 >= updatedQueue.length ? 0 : prev + 1;
      while (!updatedQueue[nextIndex] && nextIndex > 0) {
        nextIndex--;
      }
      if (nextIndex < 0 || !updatedQueue[nextIndex]) {
        setMode("COMPLETE");
      }
      setCurrentCard(updatedQueue[nextIndex]);
      return nextIndex;
    })

    if ((mode !== 'COMPLETE' && counter < state.topic.max_cards && updatedQueue.length >= 1)) {
      setMode("FRONT");
    } else {
      setMode("COMPLETE");
    }
  };

  const codiTheme = createTheme({});
  return (
    <ThemeProvider theme={codiTheme}>
      {currentCard && mode === "FRONT" && (
        <Front
          currentCard={currentCard}
          onClick={() => setMode("BACK")}
        />
      )}
      {currentCard && mode === "BACK" && (
        <Back currentCard={currentCard} handleClick={handleClick} />
      )}
      {mode === "COMPLETE" && <QuizComplete />}
    </ThemeProvider>
  );
}
