import { UPDATE_DISPLAY_GRID } from '../types';


export const updateGridDisplay = ({ height, width }) => (dispatch, getState) => {
  console.log('update happened')
  let displayGrid = getState().display.grid;
  let axis = displayGrid.radius === 0 ? width * 0.41 * 1.08 : displayGrid.radius * 1.08;
  let cross = height * 0.41 * 1.08 * 0.7;
  let center = displayGrid.svgDim === 0 ? (height * 0.95) : displayGrid.svgDim / 2;
  let step = displayGrid.radius === 0 ? (height * 0.41) / 16 : displayGrid.radius / 16;

  dispatch({
    type: UPDATE_DISPLAY_GRID,
    payload: {
      windowDimensions: {
        width,
        height
      },
      grid: {
        axis,
        cross,
        step,
        cx: center,
        cy: center,
        svgDim: height * 0.95,
        radius: height * 0.41,
      }
    }
  })
}