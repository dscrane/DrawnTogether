// Game Action Types
export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const NEXT_FORM = "NEXT_FORM";
export const PREV_FORM = "PREV_FORM";
export const RESET_FORM = "RESET_FORM";
export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const DISPLAY_CIRCLES = "DISPLAY_CIRCLES";
export const UPDATE_CIRCLES = "UPDATE_CIRCLES";
export const DISPLAY_GRID = "DISPLAY_GRID";
export const INITIALIZE_GROUP = "INITIALIZE_GROUP";
export const INITIALIZE_GAME = "INITIALIZE_GAME";

// Display Action Types
export const UPDATE_DISPLAY_GRID = "UPDATE_DISPLAY_GRID";
export const UPDATE_VIEW = "UPDATE_VIEW";
export const RESIZE_PLAYER_CIRCLES = "RESIZE_PLAYER_CIRCLES";

// Player Action Types
export const NEW_PLAYER = "NEW_PLAYER";
export const NEXT_PLAYER = "NEXT_PLAYER";
export const PREV_PLAYER = "PREV_PLAYER";
export const UPDATE_PLAYER_CIRCLE = "UPDATE_PLAYER_CIRCLE";
export const UPDATE_FINAL_CIRCLES = "UPDATE_FINAL_CIRCLES";
export const FINAL_DISPLAY = "FINAL_DISPLAY";

export const INITIAL_STATE = {
  // session data
  _id: "",
  inProgress: false,
  complete: false,
  displayGrid: false,
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
  centerPoint: { x: 0, y: 0 },
  display: {
    resizeRatio: 1,
    centerPoint: { x: 0, y: 0 },
    height: 0,
    width: 0,
    previousHeight: 0,
    previousWidth: 0,
    polarGridPath: "",
  },
};
