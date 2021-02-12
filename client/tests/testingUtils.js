import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/redux/reducers";

// Creating a custom render function including the state passed by Provider
function render(ui, { initialState, store = createStore(rootReducer, initialState), ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// Re export everything from react testing library
export * from "@testing-library/react";

export { render };
