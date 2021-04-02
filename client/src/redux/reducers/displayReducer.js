import { UPDATE_DISPLAY_GRID, UPDATE_VIEW } from "../types";

const INITIAL_STATE = {
  adjustmentMultiplier: 1,
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
      return {
        ...state,
        grid: {
          ...state.grid,
          ...action.payload,
        },
      };
    case UPDATE_VIEW:
      return {
        ...state,
        view: {
          ...state.view,
          oldHeight: state.view.height,
          oldWidth: state.view.width,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
