import React from "react";
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

  const handlePrevious = async () => {
    if (currentForm === 1) {
      await endGame();
    } else if (currentPlayer === 0) {
      await prevForm(currentForm);
    } else {
      await prevPlayer(currentPlayer);
    }
  };
  const handleSubmit = async (values, actions) => {
    if (currentForm === 1) {
      await initializeGame(gameId, values);
      await nextForm(currentForm);
      actions.resetForm({
        values: {
          ...formResponseSchema[currentForm + 1]
        }
      });
      return;
    }
    if (currentForm === 7 && currentPlayer === numPlayers) {
      await finalDisplay(players);
      await nextForm(currentForm);
      return;
    }
    if (currentForm >= 2 && currentForm <= 7) {
      if (currentPlayer < numPlayers) {
        const success = await updatePlayer(currentPlayer, session.playerIds[currentPlayer], values, currentForm);
        if (success) {
          await nextPlayer(currentPlayer)
        } else {
          alert(success.error.message)
        }
        actions.resetForm({
          values: {
            ...formResponseSchema[currentForm]
          }
        });
      } else {
        await nextForm(currentForm);
        actions.resetForm({
          values: {
            ...formResponseSchema[currentForm + 1]
          }
        });
      }
    }
  };

  return (
    <div className="form__container"
    >
      <FormDisplay
        onSubmit={handleSubmit}
        initialValues={formResponseSchema[currentForm]}
        handlePrevious={handlePrevious}
        currentForm={currentForm}
        currentPlayer={currentPlayer}
        numPlayers={numPlayers}
        players={players}
      />
    </div>
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



