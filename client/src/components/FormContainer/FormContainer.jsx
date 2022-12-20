import React from "react";
import { FormDisplay } from "../FormDisplay";
import { useDispatch, useSelector } from "react-redux";
import { createMockResponseSchema, createResponseSchema } from "../../utils";
import {
  initializePlayers,
  reinitializePlayers,
  updatePlayerCircle,
  finalDisplay,
  endGame,
} from "../../redux/sessionSlice";
import "./formContainer.css";

const formResponseSchema = {
  interest: "",
  // players: [createResponseSchema(), createResponseSchema()],
  players: [...createMockResponseSchema(1)],
};

const FormContainer = () => {
  const dispatch = useDispatch();
  const { session, display } = useSelector((state) => state);
  const { _id, currentForm, currentPlayer, numPlayers, playerIds, mocks } = session;
  const { centerPoint, radiusMultiplier, height, width } = display;

  const handlePrevious = async () => {
    dispatch({ type: "session/resetTimeout" });
    if (currentForm === 1) {
      await dispatch(endGame(_id));
    } else if (currentPlayer === 0) {
      dispatch({
        type: "session/prevForm",
        payload: { currentForm: session.currentForm - 1, currentPlayer: numPlayers - 1 },
      });
    } else {
      dispatch({ type: "session/prevPlayer", payload: { currentPlayer: currentPlayer - 1 } });
    }
  };
  const handleSubmit = async ({ interest, players }) => {
    dispatch({ type: "session/resetTimeout" });
    // First Form Submit
    if (currentForm === 1) {
      if (!Object.keys(session.players).length) {
        players = [...players, ...createMockResponseSchema(5 - players.length)];
        await dispatch(initializePlayers({ _id, interest, players }));
      } else {
        await dispatch(reinitializePlayers({ _id, players, playerIds: session.playerIds }));
      }
      dispatch({ type: "session/nextForm", payload: { currentForm: session.currentForm + 1, currentPlayer: 0 } });
      return;
    }
    // Final Form Submit
    if (currentForm === 8) {
      await dispatch(finalDisplay({ _id, currentForm, height, width }));
      return;
    }
    // Normal Form Submit
    if (currentForm >= 2 && currentForm <= 7) {
      await dispatch(
        updatePlayerCircle({
          _id,
          currentForm,
          centerPoint,
          currentPlayer,
          radiusMultiplier,
          playerId: playerIds[currentPlayer],
          responses: players[currentPlayer] || session.players[currentPlayer].responses,
          newCircle: !session.circles[currentPlayer],
        })
      );
    }

    // Handle next player or form
    if (currentPlayer < numPlayers - 1) {
      dispatch({ type: "session/nextPlayer", payload: { currentPlayer: currentPlayer + 1 } });
    } else {
      dispatch({ type: "session/nextForm", payload: { currentPlayer: 0, currentForm: session.currentForm + 1 } });
    }
  };

  return (
    <div className={`form__container ${currentForm === 1 ? "form__container-border" : ""}`}>
      <FormDisplay
        onSubmit={handleSubmit}
        handlePrevious={handlePrevious}
        initialValues={formResponseSchema}
        currentForm={currentForm}
        currentPlayer={currentPlayer}
        numPlayers={numPlayers}
        players={session.players}
        mocks={mocks}
      />
    </div>
  );
};

export default FormContainer;
