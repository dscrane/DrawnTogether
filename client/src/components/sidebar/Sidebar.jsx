import React from 'react';
import { connect } from "react-redux";
import { Header } from './Header';
import SidebarContent from "./SidebarContent";
import { default as SidebarButtons } from './SidebarButtons'
import { nextPlayer, prevPlayer } from "../../redux/actions";


const Sidebar = ({ currentForm, currentPlayer, numPlayers, prevPlayer, nextPlayer }) => {
  // console.log(currentForm)
  return (
    <div className='sidebar__content'>
      <div className='sidebar__row sidebar__row-header'>
        <Header currentForm={currentForm} />
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

const mapStateToProps = (state) => {
  return {
    ...state.game
  }
}

export default connect(mapStateToProps, { prevPlayer, nextPlayer})(Sidebar)