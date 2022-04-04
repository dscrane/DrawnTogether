import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { connect } from "react-redux";
import { Panel } from "./components/Panel";
import { Canvas } from "./components/Canvas";
import {
  generateSession,
  initializePlayers,
  nextPlayer,
  updatePlayer,
  displayCircles,
  updatePolarGrid,
} from "./redux/actions";

export const App = ({
  inProgress,
  _id,
  players,
  currentPlayer,
  generateSession,
  initializePlayers,
  updatePlayer,
  nextPlayer,
  displayCircles,
  display,
  updatePolarGrid,
}) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    generateSession();
  }, []);
  useEffect(() => {
    if (inProgress) {
      let newSocket = io("http://localhost:5500", { auth: { gameId: _id } });
      setSocket(newSocket);
      return;
    }
  }, [inProgress]);

  useEffect(() => {
    if (!inProgress) {
      return;
    }
    socket.on("connect", async () => {
      const { width, xAxisCenter, yAxisCenter } = display;
      await socket.emit("fetch-polar-grid", {
        width,
        xAxisCenter,
        yAxisCenter,
      });
    });

    socket.on("initialized-players", (data) => {
      initializePlayers(data);
    });
    socket.on("polar-grid", (polarGridPath) => {
      updatePolarGrid(polarGridPath);
    });
    socket.on("updated-player", async (data, cb) => {
      console.log(currentPlayer);
      // await updatePlayer(currentPlayer, data);
      // cb("update processed");
    });
    socket.on("display-circles", (circles) => {
      displayCircles(circles);
    });
  }, [socket, _id, initializePlayers, updatePlayer, nextPlayer]);

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

const mapStateToProps = ({ gameState: { _id, inProgress, players, currentPlayer, display } }) => {
  return {
    _id,
    currentPlayer,
    inProgress,
    players,
    display,
  };
};

export default connect(mapStateToProps, {
  generateSession,
  initializePlayers,
  updatePlayer,
  nextPlayer,
  displayCircles,
  updatePolarGrid,
})(App);
