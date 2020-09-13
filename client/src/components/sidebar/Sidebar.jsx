import React from 'react';
import { connect } from "react-redux";
import { Header } from './Header';
import SidebarContent from "./SidebarContent";
import { default as SidebarButtons } from './SidebarButtons'


const Sidebar = ({ players, currentForm }) => {
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
  console.log(currentForm)
  return (
    <div className='sidebar__content'>
      <div className='sidebar__row sidebar__row-header'>
        <Header currentForm={currentForm} formNames={formNames} />
      </div>
      <div className='sidebar__row sidebar__row-content'>
        <SidebarContent />
      </div>
      <div className='sidebar__row sidebar__row-buttons'>
        {currentForm !== 0 ? <SidebarButtons currentForm={currentForm}/> : ''}
      </div>
    </div>
  )
}

const mapStateToProps = ({ game: {players, ...rest }}) => {
  return {
    players: players,
    ...rest
  }
}

export default connect(mapStateToProps)(Sidebar)