const futureDate = require("../date/futureDate");

const responseNew = (selection, cardObject) => {
  const card = cardObject;

  if (selection === "EASY") {
    card.status = "GRADUATED";
    card.ease_factor = 2.65;
    card.interval = 4;
    card.due_at = futureDate(card.interval);

    return card;
  }

  card.status = "LEARNING";
  card.due_at = futureDate(0);
  return card;
};

module.exports = responseNew;
