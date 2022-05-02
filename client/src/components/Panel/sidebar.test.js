import React from "react";
import { render, screen, within } from "../../../tests/testingUtils";
import "@testing-library/jest-dom/extend-expect";

import { Panel } from "./";

test("component renders correctly", () => {
  render(<Panel />);
  expect(screen.getByTestId("component-Panel")).toBeDefined();
});
