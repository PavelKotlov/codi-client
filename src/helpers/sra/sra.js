// Spaced Repetition Algorithm
const responseNew = require("./response-new");
const responseLearning = require("./response-learning");
const responseGraduated = require("./response-graduated");

const sra = (selection, cardObject) => {
  const status = cardObject.status;

  if (status === "NEW") {
    return responseNew(selection, cardObject);
  }

  if (status === "LEARNING") {
    return responseLearning(selection, cardObject);
  }

  if (status === "GRADUATED") {
    return responseGraduated(selection, cardObject);
  }

  return null;
};

module.exports = sra;
