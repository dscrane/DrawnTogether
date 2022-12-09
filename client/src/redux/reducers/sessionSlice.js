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
export const generateSession = createAsyncThunk("session/generateSession", async (displayData, thunkApi) => {
  const { data } = await api.post("/games/generateSession", {
    display: {
      xMultiplier: Math.floor(displayData.width / 6),
      yMultiplier: Math.floor(displayData.height / 6),
    },
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
  if (data.finalCircle) {
    return {
      currentPlayer: currentPlayer,
      responses: data.responses,
      circleSvgData: data.circle,
      finalCircle: [data.finalCircle],
    };
  }
  return {
    currentPlayer: currentPlayer,
    responses: data.responses,
    circleSvgData: data.circle,
    finalCircle: [],
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
    display: {
      xMultiplier: Math.floor(displayData.width / 6),
      yMultiplier: Math.floor(displayData.height / 6),
    },
  });
  return {
    currentCircles: data.currentCircles,
    backgroundCircles: data.backgroundCircles,
    displayGrid: false,
    currentForm: currentForm + 1,
  };
});
export const endGame = createAsyncThunk("session/endGame", async ({ _id, currentForm }, thunkApi) => {
  await api.post("/games/endGame", { _id, currentForm });
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
    builder.addCase(reinitializePlayers.fulfilled, (state, action) => {
      return {
        ...state,
        players: {
          ...state.players,
          ...action.payload,
        },
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
        finalCircles: [...state.finalCircles, ...action.payload.finalCircle],
      };
    });
    builder.addCase(resizePlayerCircle.fulfilled, (state, action) => {
      return {
        ...state,
        circles: [...action.payload],
      };
    });
    builder.addCase(updateScreenshot.fulfilled, (state, action) => {
      return {
        ...state,
        screenshot: action.payload,
      };
    });
    builder.addCase(endGame.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(finalDisplay.fulfilled, (state, action) => {
      return {
        ...state,
        currentForm: action.payload.currentForm,
        displayGrid: action.payload.displayGrid,
        finalCircles: [...action.payload.currentCircles],
        backgroundCircles: [...state.backgroundCircles, ...action.payload.backgroundCircles],
      };
    });
  },
});

export const { nextForm, prevForm, nextPlayer, prevPlayer, toggleModal } = sessionSlice.actions;
export default sessionSlice.reducer;
