import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { connect } from "react-redux";
import { Panel } from "./components/Panel";
import { Canvas } from "./components/Canvas";
import {
  generateSession,
  initializePlayers,
  nextPlayer,
  displayCircles,
  updatePolarGrid,
  finalDisplay,
} from "./redux/actions";

export const App = ({
  _id,
  inProgress,
  display,
  displayCircles,
  finalDisplay,
  generateSession,
  initializePlayers,
  nextPlayer,
  updatePolarGrid,
}) => {
  const [socket, setSocket] = useState(null);
  const { width, centerPoint } = display;

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
      await socket.emit("fetch-polar-grid", {
        width,
        centerPoint,
      });
    });
    socket.on("initialized-players", (data) => {
      initializePlayers(data);
    });
    socket.on("polar-grid", (polarGridPath) => {
      updatePolarGrid(polarGridPath);
    });
    socket.on("display-circles", (circles) => {
      displayCircles(circles);
    });
    socket.on("final-display-circles", (circles) => {
      finalDisplay(circles);
    });
  }, [socket, _id, initializePlayers, nextPlayer]);

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
  generateSession,
  initializePlayers,
  nextPlayer,
  displayCircles,
  finalDisplay,
  updatePolarGrid,
})(App);
