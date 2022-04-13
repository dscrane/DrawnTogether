import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { connect } from "react-redux";
import { Panel } from "./components/Panel";
import { Canvas } from "./components/Canvas";
import {
  initializePlayers,
  nextPlayer,
  displayCircles,
  updatePolarGrid,
  finalDisplay,
  endGame,
  updateScreenshot,
  updatePlayerCircle,
  reinitializePlayers,
} from "./redux/actions";

export const App = ({
  _id,
  inProgress,
  display,
  displayCircles,
  finalDisplay,
  initializePlayers,
  nextPlayer,
  updatePolarGrid,
  endGame,
  updateScreenshot,
  updatePlayerCircle,
  reinitializePlayers,
}) => {
  const [socket, setSocket] = useState(null);
  const { width, centerPoint } = display;

  useEffect(() => {
    if (inProgress) {
      let newSocket =
        process.env.NODE_ENV === "production"
          ? io({ auth: { gameId: _id } })
          : io(process.env.REACT_APP_SERVER, { auth: { gameId: _id } });
      setSocket(newSocket);
      return;
    }
  }, [inProgress]);

  useEffect(() => {
    if (!inProgress || !socket) {
      return;
    }
    socket.on("connect", async () => {
      await socket.emit("fetch-polar-grid", {
        width,
        centerPoint,
      });
    });
    socket.on("initialized-players", (data) => {
      initializePlayers(data);
    });
    socket.on("reinitialized-players", ({ resetPlayers }) => {
      reinitializePlayers(resetPlayers);
    });
    socket.on("polar-grid", (polarGridPath) => {
      updatePolarGrid(polarGridPath);
    });
    socket.on("updated-circle", (circle) => {
      updatePlayerCircle(circle);
    });
    socket.on("display-circles", (circles) => {
      displayCircles(circles);
    });
    socket.on("final-display-circles", (circles) => {
      finalDisplay(circles);
    });
    socket.on("restart-game", (status) => {
      status.endGame ? endGame() : console.log("end game failed");
    });
    socket.on("screenshot-taken", (status) => {
      updateScreenshot(status);
    });
  }, [socket, _id, initializePlayers, nextPlayer, endGame]);

  return (
    <div className="app" data-testid="component-App">
      <div className="app__display">
        <div className="app__sidebar">
          <Panel socket={socket} />
        </div>
        <div className="app__canvas">
          <Canvas socket={socket} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ gameState: { _id, inProgress, display } }) => {
  return {
    _id,
    inProgress,
    display,
  };
};

export default connect(mapStateToProps, {
  initializePlayers,
  nextPlayer,
  displayCircles,
  finalDisplay,
  updatePolarGrid,
  endGame,
  updateScreenshot,
  updatePlayerCircle,
  reinitializePlayers,
})(App);
