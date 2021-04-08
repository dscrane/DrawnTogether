import React from "react";
import { connect } from "react-redux";
import { Header } from "../Header";
import { SidebarBody } from "../SidebarBody";
import { SidebarButtons } from "../SidebarButtons";

const Sidebar = ({ currentForm, currentPlayer, numPlayers }) => {
  return (
    <div className="sidebar" data-testid="component-Sidebar">
      <div className="sidebar__row sidebar__row-header">
        <Header currentForm={currentForm} />
      </div>
      <div className="sidebar__row sidebar__row-body">
        <SidebarBody />
      </div>
      {/*<div className="sidebar__row sidebar__row-buttons">
        {currentForm !== 0 && currentForm !== 9 ? (
          <SidebarButtons currentForm={currentForm} currentPlayer={currentPlayer} numPlayers={numPlayers} />
        ) : (
          ""
        )}
      </div>*/}
    </div>
  );
};

const mapStateToProps = ({ currentForm, currentPlayer, numPlayers }) => {
  return {
    currentForm,
    currentPlayer,
    numPlayers,
  };
};

export default connect(mapStateToProps)(Sidebar);
