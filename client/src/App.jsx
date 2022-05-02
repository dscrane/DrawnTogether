import React from "react";
import { Canvas } from "./components/Canvas";
import { PanelContext } from "./components/PanelContext";

export const App = () => {
  return (
    <div className="app" data-testid="component-App">
      <div className="app__display">
        <PanelContext />
        <Canvas />
      </div>
      <div className="cr">C 2020-2022 - Drawn Together - Created by Carrie and Daegan Crane</div>
    </div>
  );
};

export default App;
