import React from "react";
import { Panel } from "./components/Panel";
import { Canvas } from "./components/Canvas";

export const App = () => {
  return (
    <div className="app" data-testid="component-App">
      <div className="app__display">
        <div className="app__sidebar">
          <Panel />
        </div>
        <div className="app__canvas">
          <div className="canvas__container">
            <Canvas />
          </div>
        </div>
      </div>
    </div>
  );
};
