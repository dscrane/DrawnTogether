const required = (value) => (value || typeof value === "number" ? undefined : "Required");
const maxValue = (value) => (value && value > 120 ? "Are you really over 120 years old?!" : undefined);
const minValue = (value) => (value && value > 0 ? undefined : "Numbers need to be greater than 0 :)");
const number = (value) => (value && isNaN(Number(value)) ? "Must be a number" : undefined);
const maxLength = (value) =>
  value && value.length > 15 ? "Unfortunately names must be under 15 characters long" : undefined;

export const validateNumber = (value) => {
  return required(value) || number(value) || maxValue(value) || minValue(value);
}

export const validateString = (value) => {
  return required(value) || maxLength(value)
}