const futureDate = require("./helpers/future-date");

const responseLearning = (selection, cardObject) => {
  const today = new Date();
  const card = cardObject;

  if (selection === "GOOD") {
    card.status = "GRADUATED";
    card.ease_factor = 2.5;
    card.interval = 1;
    card.due_at = futureDate(card.interval);
  }

  if (selection === "EASY") {
    card.status = "GRADUATED";
    card.ease_factor = 2.65;
    card.interval = 4;
    card.due_at = futureDate(card.interval);
  }

  return card;
};

module.exports = responseLearning;
