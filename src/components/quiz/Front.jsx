import React from 'react';

export default function Front(props) {
  const { currentCard, onClick } = props;

  return (
    <main className="quiz__card quiz__card--front">
      <section className="quiz__card-text">
        <h1>Front</h1>
        <h4>{currentCard.front}</h4>
      </section>
      <button
        className="quiz__card-submit"
        onClick={onClick} 
      >Show Answer</button>
    </main>
  );
}

 