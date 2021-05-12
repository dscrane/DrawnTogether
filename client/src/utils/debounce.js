export const debounce = (callback, wait) => {
  let timeoutID = null;
  return (...args) => {
    window.clearTimeout(timeoutID);
    timeoutID = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};