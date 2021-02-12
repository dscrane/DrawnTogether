import React from "react";
import { connect } from "react-redux";
import { Header } from "../header";
import { SidebarContent } from "../sidebarContent";
import { SidebarButtons } from "../sidebarButtons";

const Sidebar = ({ currentForm, currentPlayer }) => {
  return (
    <div className="sidebar__content">
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
