// Game Action Types
export const GENERATE_SESSION = "GENERATE_SESSION";
export const INITIALIZE_PLAYERS = "INITIALIZE_PLAYERS";
export const REINITIALIZE_PLAYERS = "REINITIALIZE_PLAYERS";
export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const NEXT_FORM = "NEXT_FORM";
export const PREV_FORM = "PREV_FORM";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

// Display Action Types
export const DISPLAY_CIRCLES = "DISPLAY_CIRCLES";
export const ADD_PLAYER_CIRCLE = "ADD_PLAYER_CIRCLE";
export const UPDATE_PLAYER_RESPONSES = "UPDATE_PLAYER_RESPONSES";
export const UPDATE_PLAYER_CIRCLE = "UPDATE_PLAYER_CIRCLE";
export const UPDATE_POLAR_GRID = "UPDATE_POLAR_GRID";
export const FINAL_DISPLAY = "FINAL_DISPLAY";
export const UPDATE_DISPLAY_DIMENSIONS = "UPDATE_DISPLAY_DIMENSIONS";
export const UPDATE_SCREENSHOT = "UPDATE_SCREENSHOT";

// Player Action Types
export const NEXT_PLAYER = "NEXT_PLAYER";
export const PREV_PLAYER = "PREV_PLAYER";

export const INITIAL_STATE = {
  // session data
  _id: "",
  inProgress: false,
  complete: false,
  screenshot: false,
  displayGrid: false,
  showModal: false,
  numPlayers: 0,
  currentForm: 0,
  playerIds: [],
  interest: "",
  currentPlayer: 0,

  players: {},
  circles: [],
  finalCircles: [],

  // display data
  updateCircles: false,
  resizeCircles: false,
  display: {
    resizeRatio: 1,
    centerPoint: { x: 0, y: 0 },
    height: 0,
    width: 0,
    previousHeight: 0,
    previousWidth: 0,
    polarGridPath: "",
    partialPath: "",
  },
};
