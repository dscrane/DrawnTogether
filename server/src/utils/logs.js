const red = (log) => {
  console.log(`\x1b[31m${log}\x1b[0m`);
};

const green = (log) => {
  console.log(`\x1b[32m${log}\x1b[0m`);
};

const yellow = (log) => {
  console.log(`\x1b[33m${log}\x1b[0m`);
};

const blue = (log) => {
  console.log(`\x1b[34m${log}\x1b[0m`);
};

const cyan = (log) => {
  console.log(`\x1b[36m${log}\x1b[0m`);
};

export const log = {
  red,
  green,
  yellow,
  blue,
  cyan,
};
