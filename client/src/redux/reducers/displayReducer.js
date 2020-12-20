import { UPDATE_DISPLAY_GRID, UPDATE_VIEW } from "../types";

const INITIAL_STATE = {
  view: {
    height: window.innerHeight,
    width: window.innerWidth,
  },
  display: {
    stage: 0,
    svgDim: window.innerHeight * 0.95,
    radius: window.innerWidth * 0.41,
    axis: window.innerHeight * 0.41 * 1.08,
    cross: window.innerHeight * 0.41 * 1.08 * 0.7,
    cx: (window.innerHeight * 0.95) / 2,
    cy: (window.innerHeight * 0.95) / 2,
    step: (window.innerHeight * 0.41) / 16,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DISPLAY_GRID:
      console.info("%c[UPDATE_DISPLAY_GRID]: ", "color: yellow", action.type);
      return {
        ...state,
        view: {
          ...state.windowDimensions,
          ...action.payload.windowDimensions,
        },
        grid: {
          ...state.grid,
          ...action.payload.grid,
        },
      };

    case UPDATE_VIEW:
      console.info("%c[UPDATE_VIEW]: ", "color: yellow", action.type);
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
