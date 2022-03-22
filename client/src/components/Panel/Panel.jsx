import React from "react";
import { connect } from "react-redux";
import { Header } from "../Header";
import { Landing } from "../Landing";
import { FormContainer } from "../FormContainer";
import { startGame } from "../../redux/actions";
import { formInstructions } from "../../lib/instructions";
import "./panel.css";

const Panel = ({ currentForm, inProgress, startGame }) => {
  const display = inProgress ? <FormContainer /> : <Landing startGame={startGame} />;
  const panelText = formInstructions[currentForm];
  const panelTextFormat = currentForm ?
    <p className="instructions">
      {
        panelText.split('\n').map(line => <p>{line}</p>)
      }
    </p> :
    <p className="landing__text">{panelText}</p>;

  return (
    <div className="app-panel" data-testid="component-Panel">
      <div className="panel__row panel__row-header">
        <Header currentForm={currentForm} />
      </div>
      <div className="panel__row panel__row-instructions">
          { panelTextFormat }
      </div>
      <div className="panel__row panel__row-content">{display}</div>
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { currentForm, inProgress } = gameState;
  return { currentForm, inProgress };
};

export default connect(mapStateToProps, { startGame })(Panel);
