import { UPDATE_DISPLAY_GRID, UPDATE_VIEW } from "../types";

const INITIAL_STATE = {
  view: {
    height: 0,
    width: 0,
  },
  grid: {
    stage: 0,
    svgDim: 0,
    radius: 0,
    axis: 0,
    cross: 0,
    cx: 0,
    cy: 0,
    step: 0,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DISPLAY_GRID:
      console.info(
        "%c[UPDATE_DISPLAY_GRID]: ",
        "color: yellow",
        action.payload
      );
      return {
        ...state,
        grid: {
          ...state.grid,
          ...action.payload,
        },
      };

    case UPDATE_VIEW:
      console.info("%c[UPDATE_VIEW]: ", "color: yellow", action.payload);
      return {
        ...state,
        view: {
          ...state.view,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
