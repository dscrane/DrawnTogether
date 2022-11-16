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

const white = (log) => {
  console.log(`\x1b[37m${log}\x1b[0m`);
};

const controller = (log, id, status) => {
  console.log(`\x1b[37m${log} \x1b[36m${id}: \x1b[37m${status}`);
};

const controllerSuccess = (log, id, status) => {
  console.log(`\x1b[37m${log} \x1b[36m${id}: \x1b[32m${status}`);
};

const controllerFailure = (log, id, status) => {
  console.log(`\x1b[37m${log} \x1b[36m${id}: \x1b[31m${status}`);
};

const socket = (socketId, log) => {
  console.log(`\x1b[33m${socketId}\x1b[37m ${log}\x1b[0m`);
};

const socketError = (socketId, log) => {
  console.log(`\x1b[33m${socketId}\x1b[31m ${log}\x1b[0m`);
};

const update = (log, id, status) => {
  console.log(`\x1b[37m${log} \x1b[33m${id}: \x1b[37m${status}`);
};

const updateSuccess = (log, id, status) => {
  console.log(`\x1b[37m${log} \x1b[33m${id}: \x1b[32m${status}`);
};

export const log = {
  red,
  green,
  yellow,
  blue,
  cyan,
  white,
  socket,
  socketError,
  controller,
  controllerSuccess,
  controllerFailure,
  update,
  updateSuccess,
};
