export const required = (value) => (value || typeof value === "number" ? undefined : "Required");
export const maxValue = (value) => (value && value > 120 ? "Are you really over 120 years old?!" : undefined);
export const minValue = (value) => (value && value > 0 ? undefined : "Numbers need to be greater than 0 :)");
export const number = (value) => (value && isNaN(Number(value)) ? "Must be a number" : undefined);
export const maxLength = (value) =>
  value && value.length > 15 ? "Unfortunately names must be under 15 characters long" : undefined;
