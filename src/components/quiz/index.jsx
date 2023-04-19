import React from "react";
import { getFlashcardsForQuiz } from "../../helpers/selector-quiz";
import useApplicationData from "../../hooks/useApplicationData";
import useVisualMode from "../../hooks/useVisualMode";
import Front from "./Front";
import Back from "./Back";
import QuizComplete from "./QuizComplete";
import { useState } from "react";

export default function Quiz(props) {
  const [index, setIndex] = useState(0);
  const { state } = useApplicationData();
  const { mode, transition } = useVisualMode("FRONT");

  const flashcardsToDisplay = getFlashcardsForQuiz(state);
  const currentCard = flashcardsToDisplay[index];

  const handleNext = () => {
    setIndex((prev) => prev + 1);
    if (index < flashcardsToDisplay.length - 1) {
      transition('FRONT');
    } else {
      transition('COMPLETE');
    }
  };

  return (
    <>
      {index < flashcardsToDisplay.length ? (
        <>
          {mode === 'FRONT' && 
            <Front currentCard={currentCard} onClick={() => transition('BACK')}/>
          }
          {mode === 'BACK' && 
            <Back currentCard={currentCard} nextCard={handleNext} />
          }
        </>
      ) : (
        <>
        {mode === 'COMPLETE' && <QuizComplete />}
        </>
      )}
    </>
  );
}
