import React from "react";
import { connect } from "react-redux";
import { Header } from "../Header";
import { SidebarContent } from "../SidebarContent";
import { SidebarButtons } from "../SidebarButtons";

const Sidebar = ({ currentForm, currentPlayer }) => {
  return (
    <div className="sidebar__content" data-testid="component-Sidebar">
      <div className="sidebar__row sidebar__row-header">
        <Header currentForm={currentForm} />
      </div>
      <div className="sidebar__row sidebar__row-content">
        <SidebarContent />
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
