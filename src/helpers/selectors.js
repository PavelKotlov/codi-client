/* returns flashcards for a given topic to display in the quiz */
export function getFlashcardsForQuiz(state, data) {
  const filteredCards = data.filter((card) => !card.due_at || Date.parse(card.due_at) <= Date.now());
  if (state.topic.max_cards < filteredCards.length) {
    return filteredCards.slice(0, state.topic.max_cards);
  }
  console.log('filteredCards', filteredCards)
  return filteredCards;
}