import React, { useState } from "react";

export default function Back(props) {
  const { currentCard, nextCard } = props;

  return (
    <main className="quiz__card quiz__card--back">
      <section className="quiz__card-text">
        <h1>Back</h1>
        <h4>{currentCard.front}</h4>
        <h4>{currentCard.back}</h4>
      </section>
      <button className="quiz__card-again" onClick={nextCard}>
        Again
      </button>
      <button className="quiz__card-hard" onClick={nextCard}>
        Hard
      </button>
      <button className="quiz__card-good" onClick={nextCard}>
        Good
      </button>
      <button className="quiz__card-easy" onClick={nextCard}>
        Easy
      </button>
    </main>
  );
}
