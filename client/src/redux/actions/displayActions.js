import { UPDATE_DISPLAY_GRID, UPDATE_VIEW } from "../types";

export const updateView = (dimensions) => (dispatch) => {
  dispatch({
    type: UPDATE_VIEW,
    payload: {
      height: dimensions.height,
      width: dimensions.width,
    },
  });
};

export const updateGridDisplay = (view) => async (dispatch) => {
  const { height, width } = view;

  const svgDim = height > width ? height : width;
  const radius = height < width ? height / 2 : width / 2;
  const axis = radius * 1.1;
  const cross = radius * 0.75;
  const centerY = height / 2;
  const centerX = width / 2;
  const step = radius / 16;

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
