import { screen } from "@testing-library/react";
import { render } from "../../../../../tests/testingUtils";
import PanelHeader from "./PanelHeader";

it("Component renders without crashing", () => {
  render(<PanelHeader currentForm={0} />);
  expect(screen.getByTestId("component-PanelHeader")).toBeDefined();
});
it("Form 0: Icons should not be displayed", () => {
  render(<PanelHeader currentForm={0} />);
  const element = screen.getByTestId("component-PanelHeader").querySelector(".header__icons");
  expect(element).toBeNull();
});
it("Form 8: Icons should not be displayed", () => {
  render(<PanelHeader currentForm={9} />);
  const element = screen.getByTestId("component-PanelHeader").querySelector(".header__icons");
  expect(element).toBeNull();
});
