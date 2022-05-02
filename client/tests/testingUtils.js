import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { applyMiddleware, createStore } from "redux";
import reducers from "../src/redux/reducers";
import reduxThunk from "redux-thunk";

const AllProviders = ({ children }) => {
  return <Provider store={createStore(reducers, applyMiddleware(reduxThunk))}>{children}</Provider>;
};

const customRender = (ui, options) => {
  render(ui, { wrapper: AllProviders, ...options });
};

// Re export everything from react testing library
export * from "@testing-library/react";

export { customRender as render };
