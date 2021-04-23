import React from "react";
import { render, screen, within } from "../../../tests/testingUtils";
import "@testing-library/jest-dom/extend-expect";

import { Sidebar } from "./";

test("component renders correctly", () => {
  const container = render(<Sidebar />);
  const element = screen.getByTestId("component-Panel");
});
