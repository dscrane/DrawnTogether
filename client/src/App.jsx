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

  useEffect(() => {
    if (inProgress && _id !== "") {
      let newSocket =
        process.env.NODE_ENV === "production"
          ? io({ auth: { gameId: _id }, transports: ["websocket", "polling"] })
          : io(process.env.REACT_APP_SERVER, { auth: { gameId: _id } });
      setSocket(newSocket);
      return;
    }
  }, [inProgress, _id]);

  useEffect(() => {
    if (!inProgress || !socket) {
      return;
    }
    socket.on("initialized-players", async (players, ack) => {
      await initializePlayers(players);
      ack(true);
    });
    socket.on("reinitialized-players", async (resetPlayers, ack) => {
      await reinitializePlayers(resetPlayers);
      ack(true);
    });
    socket.on("polar-grid", async (paths, ack) => {
      await updatePolarGrid(paths);
      ack(true);
    });
    socket.on("updated-circle", async (circle, ack) => {
      await updatePlayerCircle(circle);
      ack(true);
    });
    socket.on("display-circles", async (circles, ack) => {
      await displayCircles(circles);
      ack(true);
    });
    socket.on("final-display-circles", async (circles, ack) => {
      await finalDisplay(circles);
      ack(true);
    });
    socket.on("restart-game", async (status, ack) => {
      await endGame();
      await socket.disconnect();
      ack(true);
    });
    socket.on("screenshot-taken", async (status, ack) => {
      await updateScreenshot(status);
      ack(true);
    });
    socket.on("error", async (err) => {
      console.log(err);
    });
  }, [
    socket,
    _id,
    inProgress,
    initializePlayers,
    reinitializePlayers,
    displayCircles,
    finalDisplay,
    updatePlayerCircle,
    updateScreenshot,
    updatePolarGrid,
    nextPlayer,
    endGame,
  ]);

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
      <div className="cr">C 2020-2022 - Drawn Together - Created by Carrie and Daegan Crane</div>
    </div>
  );
};

const mapStateToProps = ({ gameState: { _id, inProgress } }) => {
  return {
    _id,
    inProgress,
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
