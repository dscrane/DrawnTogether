import React from "react";
import { Canvas } from "./components/Canvas";
import { PanelLayout } from "./components/PanelLayout";

export const App = () => {
  return (
    <div className="app" data-testid="component-App">
      <div className="app__display">
        <PanelLayout />
        <Canvas />
      </div>
      <div id="copyright" className="cr">
        C 2020-2022 - Drawn Together - Created by Carrie and Daegan Crane
      </div>
    </div>
  );
};

export default App;
