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

export const checkResponse = (formData, currentPlayer, currentForm) => {
  const isNewResponse = formResponses[currentForm].every(
    (responseKey) => currentPlayer.responses[responseKey] === undefined
  );
  const isUpdatedResponse = formResponses[currentForm].some((responseKey) => {
    return formData[responseKey] !== currentPlayer.responses[responseKey];
  });

  if (isNewResponse) {
    return { isNewResponse };
  } else if (isUpdatedResponse) {
    return { isUpdatedResponse };
  } else {
    return { noUpdate: true };
  }
};
