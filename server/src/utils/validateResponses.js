const formResponses = [
  "name",
  "association",
  "age",
  "diet",
  "productivity",
  "height",
  "curiosity",
  "leaning",
  "personality",
  "hair",
  "food",
  "money",
  "nature",
  "media",
  "progress",
  "religion",
  "culture",
  "color",
];

export const validateResponses = (responses) => {
  const isValid = responses.every((response) =>
    formResponses.includes(response)
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
