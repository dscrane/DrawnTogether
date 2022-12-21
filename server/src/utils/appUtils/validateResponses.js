const formResponses = [
  null,
  ["name", "association"],
  ["height", "curiosity", "hair", "diet"],
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
    return (
      !savedResponses[response].toString() ||
      updatedResponses[response].toString() !==
        savedResponses[response].toString()
    );
  });

  return { valid, updated };
};
