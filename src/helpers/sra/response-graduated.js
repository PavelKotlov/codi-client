const futureDate = require("../date/futureDate");

const responseGraduated = (selection, cardObject) => {
  const today = new Date();
  const card = cardObject;

  if (selection === "HARD") {
    card.ease_factor -= 0.15;
    card.interval = Math.round(card.interval * 1.2);
    card.due_at = futureDate(card.interval);
  }

  if (selection === "GOOD") {
    card.interval = Math.round(card.interval * card.ease_factor);
    card.due_at = futureDate(card.interval);
  }

  if (selection === "EASY") {
    card.ease_factor += 0.15;
    card.interval = Math.round(card.interval * card.ease_factor);
    card.due_at = futureDate(card.interval);
  }

  // Safety Checks

  // Interval cannot be lower than 1
  if (card.interval < 1) {
    card.interval = 1;
  }

  // Ease Factor cannot be lower than 1.3
  if (card.ease_factor < 1.3) {
    card.ease_factor = 1.3;
  }

  return card;
};

module.exports = responseGraduated;
