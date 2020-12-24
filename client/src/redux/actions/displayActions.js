import { UPDATE_DISPLAY_GRID, UPDATE_VIEW } from "../types";

const resizeGrid = (height, width, svgDim = 0) => {
  if (svgDim > height || svgDim > width) {
    return height > width ? height : width;
  } else if (svgDim < height && svgDim > width) {
    return width;
  } else if (svgDim < width && svgDim > height) {
    return height;
  }
};

export const updateView = (dimensions) => (dispatch) => {
  dispatch({
    type: UPDATE_VIEW,
    payload: {
      height: dimensions.height * 0.85,
      width: dimensions.width * 0.85,
    },
  });
};

export const updateGridDisplay = (view) => async (dispatch, getState) => {
  console.log("update happened");
  let displayGrid = getState().display.grid;
  const { height, width } = view;
  await resizeGrid(height, width, displayGrid.svgDim);
  console.log("view: ", view);
  console.log("displayGrid:", getState().display);
  let axis = displayGrid.radius === 0 ? (height / 2) * 1.2 : displayGrid.radius;
  let cross = height;
  console.log("cross: ", height);
  let center = displayGrid.svgDim === 0 ? height / 2 : displayGrid.svgDim / 2;
  let step = displayGrid.radius === 0 ? height / 32 : displayGrid.radius / 32;

  dispatch({
    type: UPDATE_DISPLAY_GRID,
    payload: {
      view: {
        width,
        height,
      },
      grid: {
        axis,
        cross,
        step,
        cx: center,
        cy: center,
        svgDim: height < width ? height : width,
        radius: height < width ? height / 2 : width / 2,
      },
    },
  });
};
