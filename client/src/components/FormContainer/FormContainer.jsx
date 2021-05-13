import React, { useEffect } from "react";
import { FormDisplay } from "../FormDisplay";
import { connect } from "react-redux";
import {
  endGame,
  finalDisplay,
  nextForm,
  nextPlayer,
  prevForm,
  prevPlayer,
  initializeGame,
  updatePlayer,
  updatePlayerCircle,
} from "../../redux/actions";
import { FormHeading } from "../FormHeading";

const formResponseSchema = [
  null,
  {
    interest: "",
    players: [
      {
        name: "",
        association: ""
      },
      {
        name: "",
        association: ""
      }
    ],
  },
  {
    age: "",
    diet: "",
    gender: "",
    height: "",
    interest: "",
  },
  {
    time: "",
    personality: "",
    hair: "",
  },
  {
    food: "",
    money: "",
  },
  {
    nature: "",
    media: "",
    progress: "",
  },
  {
    religion: "",
    culture: "",
  },
  {
    color: "",
  }

]

const FormContainer = ({
  session,
  gameId,
  players,
  updatePlayer,
  updatePlayerCircle,
  nextPlayer,
  initializeGame,
  prevPlayer,
  nextForm,
  prevForm,
  endGame,
  finalDisplay,
}) => {
  const { currentForm, currentPlayer, numPlayers } = session;

  useEffect(() => {
    if (currentForm >= 2 && currentPlayer > 0) {
      updatePlayerCircle(players[currentPlayer - 1], currentPlayer - 1, currentForm);
    }
  }, [currentPlayer]);

  const handlePrevious = async () => {
    if (currentForm === 1) {
      await endGame();
    } else if (currentPlayer === 0) {
      await prevForm(currentForm);
    } else {
      await prevPlayer(currentPlayer);
    }
  };

  const handleNext = async (values, actions) => {
    console.log(values)
    if (currentForm === 1) {
      await initializeGame(gameId, values);
      await nextForm(currentForm);
      actions.resetForm(formResponseSchema[currentForm]);
      return;
    }

    if (currentForm === 7 && currentPlayer === numPlayers) {
      await finalDisplay(players);
      await nextForm(currentForm);
      return;
    }

    if (currentForm >= 2 && currentForm <= 7) {
      console.log(values)

      if (currentPlayer < numPlayers) {
        /*const success = */await updatePlayer(currentPlayer, session.playerIds[currentPlayer], values, currentForm);
        if (/*success*/true) {
          await nextPlayer(currentPlayer)
        }
      } else {
        await nextForm(currentForm);
      }
    }
        actions.resetForm(formResponseSchema[currentForm])
  };

  return (
    <>
      <FormHeading currentPlayer={currentPlayer} numPlayers={numPlayers} players={players} />
      <FormDisplay
        onSubmit={handleNext}
        handlePrevious={handlePrevious}
        currentForm={currentForm}
        currentPlayer={currentPlayer}
        numPlayers={numPlayers}
      />
    </>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { canvasDisplay, players, gameId, ...rest } = gameState;
  return {
    canvasDisplay,
    players,
    gameId,
    session: rest,
  };
};

export default connect(mapStateToProps, {
  updatePlayer,
  nextPlayer,
  prevPlayer,
  nextForm,
  prevForm,
  endGame,
  updatePlayerCircle,
  initializeGame,
  finalDisplay,
})(FormContainer);
