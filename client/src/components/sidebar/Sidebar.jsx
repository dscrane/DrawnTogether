import React from 'react';
import { Header } from './Header';
import SidebarContent from "./SidebarContent";
import { connect } from "react-redux";

const formNames = [
  "",
  "Interest",
  "Players",
  "Physical",
  "Personal",
  "Financial",
  "Natural",
  "Cultural",
  "Visual",
];

export const Sidebar = ({ currentForm }) => {
  return (
    <div className='sidebar__content'>
      <div className='sidebar__row sidebar__row-header'>
        <Header currentForm={currentForm} formNames={formNames} />
      </div>
      <div className='sidebar__row sidebar__row-content'>
        <SidebarContent />
      </div>
    </div>
  )
}

const mapStateToProps = ({ game: {players, ...rest} }) => {
  return {
    players: players,
    ...rest
  }
}

export default connect(mapStateToProps, {  })(Sidebar)