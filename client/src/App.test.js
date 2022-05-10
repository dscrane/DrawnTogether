import { render, screen } from "../tests/testingUtils";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const appElement = screen.getByTestId("component-App");
  const copyrightElement = document.getElementById("copyright");
  expect(appElement).toBeInTheDocument();
  expect(copyrightElement).toBeInTheDocument();
});
