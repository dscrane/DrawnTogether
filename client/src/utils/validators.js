const required = (value) => (value || typeof value === "number" ? undefined : "Required");
const maxValue = (value) => (value && value > 120 ? "Are you really over 120 years old?!" : undefined);
const minValue = (value) => (value && value > 0 ? undefined : "Numbers need to be greater than 0 :)");
const number = (value) => (value && isNaN(Number(value)) ? "Must be a number" : undefined);
const maxLength = (value, length) =>
  value && value.length > length ? `Unfortunately names must be under ${length} characters long` : undefined;

export const validateAssociation = (value) => {
  return required(value);
};

export const validateString = (value) => {
  return required(value) || maxLength(value, 15);
};

export const validateInterest = (value) => {
  return required(value) || maxLength(value, 30);
};
