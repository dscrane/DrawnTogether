const formResponses = [
  null,
  null,
  ["diet", "age", "gender", "height", "interest"],
];

export const validateResponses = (responses, validator) => {
  console.log(responses, formResponses[validator]);
  return responses.every((response) =>
    formResponses[validator].includes(response)
  );
};
