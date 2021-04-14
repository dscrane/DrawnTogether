import React from "react";
import { connect } from "react-redux";
import { Header } from "../Header";
import { SidebarBody } from "../SidebarBody";

const Sidebar = ({ currentForm }) => {
  return (
    <div className="sidebar" data-testid="component-Sidebar">
      <div className="sidebar__row sidebar__row-header">
        <Header currentForm={currentForm} />
      </div>
      <div className="sidebar__row sidebar__row-body">
        <SidebarBody />
      </div>
    </div>
  );
};

const mapStateToProps = ({ gameState }) => {
  const { currentForm } = gameState;
  return { currentForm };
};

export default connect(mapStateToProps)(Sidebar);
