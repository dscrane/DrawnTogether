// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../../utils";
// import {generateSession} from "./sessionSlice";
//

//
// const initialState = {
//   players: {},
//   mocks: {},
//   circles: [],
//   finalCircles: [],
// };
//
// const dataSlice = createSlice({
//   name: "data",
//   initialState: initialState,
//   reducers: {
//     updatePlayerResponses: (state, action) => {
//       return {
//         ...state,
//         players: {
//           ...state.players,
//           [action.payload.currentPlayer]: {
//             ...state.players[action.payload.currentPlayer],
//             responses: {
//               ...state.players[action.payload.currentPlayer].responses,
//               ...action.payload.responses,
//             },
//           },
//         },
//       };
//     },
//     addPlayerCircle: (state, action) => {
//       return {
//         ...state,
//         circles: [
//           ...state.circles.slice(0, action.payload.currentPlayer),
//           action.payload.circleSvg,
//           ...state.circles.slice(action.payload.currentPlayer + 1),
//         ],
//       };
//     },
//     updatePlayerCircle: (state, action) => {
//       return {
//         ...state,
//         circles: state.circles.map((el, i) => (el.props.id === action.payload.props.id ? action.payload : el)),
//       };
//     },
//   },
//   extraReducers: (builder) => {
//
// });
//
// export const { updatePlayerResponses, addPlayerCircle, updatePlayerCircle } = dataSlice.actions;
// export default dataSlice.reducer;
