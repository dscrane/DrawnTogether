import React from "react";
import { FormDisplay } from "../FormDisplay";
import { useDispatch, useSelector } from "react-redux";
import { createMockResponseSchema, createResponseSchema } from "../../utils";
import {
  initializePlayers,
  reinitializePlayers,
  updatePlayerCircle,
  endGame,
  finalDisplay,
} from "../../redux/reducers/sessionSlice";
import "./formContainer.css";

const formResponseSchema = {
  interest: "",
  // players: [createResponseSchema(), createResponseSchema()],
  players: createMockResponseSchema(0),
};

const FormContainer = () => {
  const dispatch = useDispatch();
  const { session, display } = useSelector((state) => state);
  const { _id, currentForm, currentPlayer, numPlayers, playerIds, mocks } = session;
  const { centerPoint } = display;

  const handlePrevious = async () => {
    if (currentForm === 1) {
      await dispatch(endGame(_id));
    } else if (currentPlayer === 0) {
      dispatch({ type: "session/prevForm", payload: { currentForm: session.currentForm - 1 } });
    } else {
      dispatch({ type: "session/prevPlayer", payload: { currentPlayer: currentPlayer - 1 } });
    }
  };
  const handleSubmit = async ({ interest, players }) => {
    // First Form Submit
    if (currentForm === 1) {
      if (!Object.keys(session.players).length) {
        const numMocks = 5 - players.length;
        const mocks = numMocks ? createMockResponseSchema(numMocks) : [];
        players = [...players, ...mocks];
        await dispatch(initializePlayers({ _id, interest, players }));
      } else {
        await dispatch(reinitializePlayers({ _id, players, playerIds: session.playerIds }));
      }
      dispatch({ type: "session/nextForm", payload: { currentForm: session.currentForm + 1, currentPlayer: 0 } });
      return;
    }
    // Final Form Submit
    if (currentForm === 8) {
      await dispatch(finalDisplay({ _id, currentForm, centerPoint }));
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
      <div className="form__scroll">
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
    </div>
  );
};

export default FormContainer;
