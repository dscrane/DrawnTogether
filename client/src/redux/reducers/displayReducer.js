import { UPDATE_DISPLAY_GRID } from '../types';


const INITIAL_STATE = {
  windowDimensions: {
    height: 0,
    width: 0
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
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DISPLAY_GRID:
      console.log(action.type)
      return {
        ...state,
        windowDimensions: {
          ...state.windowDimensions,
          ...action.payload.windowDimensions
        },
        grid: {
          ...state.grid,
          ...action.payload.grid
        }
      }

    default:
      return state;
  }
}