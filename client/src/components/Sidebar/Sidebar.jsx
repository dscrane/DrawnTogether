import React from "react";
import { connect } from "react-redux";
import { Header } from "../Header";
import { SidebarBody } from "../SidebarBody";
import { SidebarButtons } from "../SidebarButtons";

const Sidebar = ({ currentForm, currentPlayer }) => {
  return (
    <div className="sidebar" data-testid="component-Sidebar">
      <div className="sidebar__row sidebar__row-header">
        <Header currentForm={currentForm} />
      </div>
      <div className="sidebar__row sidebar__row-body">
        <SidebarBody />
      </div>
      <div className="sidebar__row sidebar__row-buttons">
        {currentForm !== 0 ? <SidebarButtons currentForm={currentForm} currentPlayer={currentPlayer} /> : ""}
      </div>
    </div>
  );
};

const mapStateToProps = ({ game }) => {
  return {
    currentForm: game.currentForm,
    currentPlayer: game.currentPlayer,
  };
};

export default connect(mapStateToProps)(Sidebar);
