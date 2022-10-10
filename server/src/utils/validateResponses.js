const formResponses = [
  null,
  ["name", "association"],
  ["height", "curiosity", "hair", "age", "diet"],
  ["personality", "leaning", "productivity"],
  ["money", "food"],
  ["nature", "media", "progress"],
  ["religion", "culture"],
  ["color"],
];

export const validateResponses = (
  savedResponses,
  updatedResponses,
  updateStep
) => {
  const valid = formResponses[updateStep].every(
    (response) => updatedResponses[response] !== ""
  );

  const updated = formResponses[updateStep].some((response) => {
    console.log(
      updatedResponses[response].toString(),
      `${savedResponses[response]}`
    );
    return (
      !savedResponses[response].toString() ||
      updatedResponses[response].toString() !==
        savedResponses[response].toString()
    );
  });

  return { valid, updated };
};

// export const validateResponses = (responses) => {
//   const isValid = responses.every((response) =>
//     formResponses.includes(response)
//   );
//
//   if (!isValid) {
//     throw new ValidationException(
//       "An error has occurred, please try entering your responses again."
//     );
//   } else {
//     return true;
//   }
// };
//
// function ValidationException(message) {
//   this.message = message;
//   this.name = "Response Validation Error";
// }
