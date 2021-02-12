import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Sidebar } from "../Sidebar";

test("component renders correctly", () => {
  const { container } = render(<Sidebar />);
  console.log(container);
});
