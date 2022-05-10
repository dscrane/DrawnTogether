import { render, screen } from "../../../tests/testingUtils";
import { Canvas } from "./index";

test("Renders Canvas component", () => {
  render(<Canvas />);

  const canvasElement = screen.getByTestId("component-Canvas");
  expect(canvasElement).toBeInTheDocument();
});
