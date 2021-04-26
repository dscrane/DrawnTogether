import { UPDATE_DISPLAY_GRID, UPDATE_VIEW, RESIZE_PLAYER_CIRCLES } from "../types";

export const resizePlayerCircles = (players) => (dispatch) => {
  dispatch({
    type: RESIZE_PLAYER_CIRCLES,
    payload: "PAYLOAD",
  });
};

export const updateView = (dimensions) => (dispatch) => {
  dispatch({
    type: UPDATE_VIEW,
    payload: {
      height: Math.round(dimensions.height),
      width: Math.round(dimensions.width),
    },
  });
};

export const updateGridDisplay = (view) => async (dispatch) => {
  const { height, width } = view;

  const svgDim = height > width ? Math.round(height) : Math.round(width);
  const radius = height < width ? Math.round(height / 2) : Math.round(width / 2);
  const axis = Math.round(radius * 1.1);
  const cross = Math.round(radius * 0.75);
  const centerY = Math.round(height / 2);
  const centerX = Math.round(width / 2);
  const step = Math.round(radius / 16);

  dispatch({
    type: UPDATE_DISPLAY_GRID,
    payload: {
      axis,
      cross,
      step,
      radius,
      svgDim,
      cx: centerX,
      cy: centerY,
    },
  });
};
