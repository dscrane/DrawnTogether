import { render, screen } from "../../../tests/testingUtils";
import { PanelLayout } from "./index";

test("Renders PanelLayout component", () => {
  render(<PanelLayout />);

  const panelLayoutElement = screen.getByTestId("component-PanelLayout");
  expect(panelLayoutElement).toBeInTheDocument();
});
