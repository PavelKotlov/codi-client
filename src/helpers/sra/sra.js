// Spaced Repetition Algorithm
const responseNew = require("./response-new");
const responseLearning = require("./response-learning");
const responseGraduated = require("./response-graduated");

//TODO: Should this function take in an object and return an object ? or should it take in a json and return json?
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
