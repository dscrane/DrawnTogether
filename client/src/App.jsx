import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { initializeGame, initializePlayers, startGame, updatePolarGrid } from "./redux/actions";
import { Panel } from "./components/Panel";
import { Canvas } from "./components/Canvas";
import { api } from "./utils";
import { io } from "socket.io-client";

const App = ({ gridDisplay, inProgress, initializeGame, initializePlayers, startGame, updatePolarGrid }) => {
  const [socket, setSocket] = useState(io("http://localhost:5500/", { autoConnect: false }));
  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (socket && inProgress) {
      socket.connect();
    }
    socket.on("connect", async () => {
      console.log("[ON]: connect");
      const gridData = {
        width: gridDisplay.width,
        xAxisCenter: gridDisplay.xAxisCenter,
        yAxisCenter: gridDisplay.yAxisCenter,
      };
      await socket.emit("fetch-polar-grid", gridData);
    });

    socket.on("polar-grid", async (polarGridPath) => {
      console.log("[ON]: polar-grid");
      await updatePolarGrid({ polarGridPath });
    });
    socket.on("initialized-players", async ({ playerIds, playersObj }) => {
      console.log("[ON]: initialized-players");
      await initializePlayers(playerIds, playersObj);
    });
    socket.on("display-circles", (circles) => {
      const generateCirclePaths = (c) => {
        c.forEach();
      };
    });
  }, [socket, inProgress, startGame, updatePolarGrid, initializePlayers]);

  return (
    <div className="app" data-testid="component-App">
      <div className="app__display">
        <div className="app__sidebar">
          <Panel />
        </div>
        <div className="app__canvas">
          <Canvas />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  inProgress: state.gameState.inProgress,
  gridDisplay: state.gameState.gridDisplay,
});

export default connect(mapStateToProps, {
  initializeGame,
  initializePlayers,
  startGame,
  updatePolarGrid,
})(App);
