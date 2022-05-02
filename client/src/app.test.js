import { screen } from "@testing-library/react";
import { render } from "../tests/testingUtils";
import { unmountComponentAtNode } from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("App Component tests", () => {
  it("Renders without crashing", () => {
    render(<App />);
    expect(screen.getByTestId("component-App")).toBeDefined();
  });
});
