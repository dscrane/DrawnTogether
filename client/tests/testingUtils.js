import "@testing-library/jest-dom";
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// Creating a custom render function including the state passed by Provider
function render(ui, { initialState, store = configureStore({}), ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// Re export everything from react testing library
export * from "@testing-library/react";

export { render };
