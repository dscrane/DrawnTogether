import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils";

export const updatePolarGrid = createAsyncThunk("display/updatePolarGrid", async (display, thunkApi) => {
  const { data } = await api.post("/games/fetchPolarGrid", { ...display });
  return data;
});

const displaySlice = createSlice({
  name: "display",
  initialState: {
    resizeRatio: 1,
    centerPoint: { x: 0, y: 0 },
    height: 0,
    width: 0,
    previousHeight: 0,
    previousWidth: 0,
    polarGridPath: "",
    partialPath: "",
  },
  reducers: {
    updateDimensions: (state, action) => {
      return {
        ...state,
        ...action.payload,
        centerPoint: {
          y: parseFloat((action.payload.height / 2).toFixed(4)),
          x: parseFloat((action.payload.width / 2).toFixed(4)),
        },
        oldHeight: state.height,
        oldWidth: state.width,
      };
    },
    displayCircles: (state, action) => {
      return {
        ...state,
        circles: [...action.payload.circleSvgs],
      };
    },
    finalDisplay: (state, action) => {
      return {
        ...state,
        currentForm: action.payload.currentForm,
        displayGrid: action.payload.displayGrid,
        finalCircles: [...state.finalCircles, ...action.payload.finalCircles],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updatePolarGrid.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

export const { updateDimensions, displayCircles, finalDisplay } = displaySlice.actions;
export default displaySlice.reducer;
