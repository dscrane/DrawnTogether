import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils";

const initialState = {
  _id: "",
  inProgress: false,
  complete: false,
  screenshot: false,
  displayGrid: false,
  showModal: false,
  numPlayers: 0,
  currentForm: 0,
  playerIds: [],
  interest: "",
  currentPlayer: 0,
  players: {},
  mocks: {},
  circles: [],
  finalCircles: [],
  backgroundCircles: [],
  error: {},
};

// Thunk actions
export const generateSession = createAsyncThunk("session/generateSession", async (display, thunkApi) => {
  const { data } = await api.post("/games/generateSession", {
    ...display,
    centerPoint: [
      // top row tiny
      { x: 425, y: 175 },
      { x: 1111, y: 140 },
      // middle row tiny
      { x: 590, y: 390 },
      { x: 890, y: 270 },
      // bottom row tiny
      { x: 205, y: 900 },
      { x: 735, y: 715 },
    ],
  });
  return data;
});
export const initializePlayers = createAsyncThunk("session/initializePlayers", async (responses, thunkApi) => {
  const { data } = await api.post("/games/initializePlayers", responses);
  return data;
});
export const reinitializePlayers = createAsyncThunk("session/reinitializePlayers", async (responses, thunkApi) => {
  const { data } = await api.post("/games/reinitializePlayers", responses);
  return data;
});
export const updatePlayerCircle = createAsyncThunk("session/updatePlayerCircle", async (updateData, thunkApi) => {
  const { currentPlayer, centerPoint, currentForm, newCircle, ...rest } = updateData;
  const url = newCircle ? "/games/addPlayerCircle" : "/games/updatePlayer";
  const { data } = await api.post(url, {
    ...rest,
    centerPoint,
    updateStep: currentForm,
  });
  return {
    currentPlayer: currentPlayer,
    responses: data.responses,
    circleSvgData: data.circle,
  };
});
export const resizePlayerCircle = createAsyncThunk("session/resizePlayerCircle", async (resizeData, thunkApi) => {
  const { data } = await api.post("/games/resizePlayerCircle", { ...resizeData });
  return data.resizedCircles;
});
export const updateScreenshot = createAsyncThunk("session/updateScreenshot", async (screenshotData, thunkApi) => {
  const { data } = await api.post("/games/updateScreenshot", screenshotData);
  return data;
});
export const finalDisplay = createAsyncThunk("session/finalDisplay", async (displayData, thunkApi) => {
  const { _id, currentForm } = displayData;
  // TODO look for a way to generate locations
  const { data } = await api.post("/games/fetchCircleData", {
    gameId: _id,
    ratio: 0.2,
    centerPoint: [
      // current game
      { x: 800, y: 350 },
      // // recent games
      { x: 390, y: 125 },
      { x: 915, y: 825 },
      { x: 150, y: 500 },
      { x: 1275, y: 410 },
      // top row small
      { x: 150, y: 100 },
      { x: 625, y: 75 },
      { x: 1125, y: 110 },
      // middle row small
      { x: 690, y: 370 },
      // bottom row small
      { x: 105, y: 900 },
      { x: 700, y: 775 },
      { x: 1300, y: 810 },
    ],
  });

  return {
    finalCircles: data.finalCircles,
    backgroundCircles: data.backgroundCircles,
    displayGrid: false,
    currentForm: currentForm + 1,
  };
});
export const endGame = createAsyncThunk("session/endGame", async (_id, thunkApi) => {
  await api.post("/games/endGame", { _id });
  return initialState;
});

const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    nextForm: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    prevForm: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    nextPlayer: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    prevPlayer: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    toggleModal: (state, action) => {
      return {
        ...state,
        showModal: !state.showModal,
      };
    },
    updatePlayerResponses: (state, action) => {
      return {
        ...state,
        players: {
          ...state.players,
          [action.payload.currentPlayer]: {
            ...state.players[action.payload.currentPlayer],
            responses: {
              ...state.players[action.payload.currentPlayer].responses,
              ...action.payload.responses,
            },
          },
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(generateSession.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload.game,
        currentForm: 1,
        displayGrid: true,
        currentPlayer: 0,
        backgroundCircles: [...action.payload.backgroundCircles],
      };
    });
    builder.addCase(generateSession.rejected, (state, action) => {
      console.log("SERVER IS OFF LINE PLEASE TRY AGAIN LATER");
      return {
        ...state,
        error: action.payload,
      };
    });
    builder.addCase(initializePlayers.fulfilled, (state, action) => {
      return {
        ...state,
        interest: action.payload.interest,
        numPlayers: action.payload.numPlayers,
        players: {
          ...state.players,
          ...action.payload.playersObj,
        },
        playerIds: [...state.playerIds, ...action.payload.playerIds],
      };
    });
    builder.addCase(initializePlayers.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    });
    builder.addCase(reinitializePlayers.fulfilled, (state, action) => {
      return {
        ...state,
        players: {
          ...state.players,
          ...action.payload,
        },
      };
    });
    builder.addCase(reinitializePlayers.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    });
    builder.addCase(updatePlayerCircle.fulfilled, (state, action) => {
      return {
        ...state,
        players: {
          ...state.players,
          [action.payload.currentPlayer]: {
            ...state.players[action.payload.currentPlayer],
            responses: {
              ...state.players[action.payload.currentPlayer].responses,
              ...action.payload.responses,
            },
          },
        },
        circles: [
          ...state.circles.slice(0, action.payload.currentPlayer),
          action.payload.circleSvgData,
          ...state.circles.slice(action.payload.currentPlayer + 1),
        ],
      };
    });
    builder.addCase(updatePlayerCircle.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    });
    builder.addCase(resizePlayerCircle.fulfilled, (state, action) => {
      return {
        ...state,
        circles: [...action.payload],
      };
    });
    builder.addCase(resizePlayerCircle.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    });
    builder.addCase(updateScreenshot.fulfilled, (state, action) => {
      return {
        ...state,
        screenshot: action.payload,
      };
    });
    builder.addCase(updateScreenshot.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    });
    builder.addCase(endGame.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(endGame.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    });
    builder.addCase(finalDisplay.fulfilled, (state, action) => {
      return {
        ...state,
        currentForm: action.payload.currentForm,
        displayGrid: action.payload.displayGrid,
        finalCircles: [...state.finalCircles, ...action.payload.finalCircles],
        backgroundCircles: [...state.backgroundCircles, ...action.payload.backgroundCircles],
      };
    });
    builder.addCase(finalDisplay.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    });
  },
});

export const { nextForm, prevForm, nextPlayer, prevPlayer, toggleModal } = sessionSlice.actions;
export default sessionSlice.reducer;
