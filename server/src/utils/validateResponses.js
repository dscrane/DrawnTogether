const formResponses = [
  null,
  null,
  ["diet", "age", "gender", "height", "interest"],
  ["time", "personality", "hair"],
  ["money", "food"],
  ["nature", "media", "progress"],
  ["culture", "religion"],
  ["color"],
];

export const validateResponses = (responses, validator) => {
  const isValid = responses.every((response) =>
    formResponses[validator].includes(response)
  );

  if (!isValid) {
    throw new ValidationException(
      "An error has occurred, please try entering your responses again."
    );
  } else {
    return true;
  }
};

function ValidationException(message) {
  this.message = message;
  this.name = "Response Validation Error";
}
