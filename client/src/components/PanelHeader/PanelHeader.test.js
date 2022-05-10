import { render, screen } from "../../../tests/testingUtils";
import { PanelHeader } from "./index";

test("Renders Panel Heading", () => {
  render(<PanelHeader />);

  const titleElement = screen.getByText(/^Drawn Together$/i);
  const subtitleElement = screen.getByText(/an interactive image generator/i);

  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeInTheDocument();
});
