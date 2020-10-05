import React, {  } from 'react';
import { connect } from 'react-redux';
import { updateGridDisplay } from "../../redux/actions";


const Canvas = ({ display, game, updateGridDisplay }) => {

  return (
    <div>
      This is the canvas!
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    display: state.display,
    game: state.game
  }
}

export default connect(mapStateToProps, { updateGridDisplay })(Canvas);
