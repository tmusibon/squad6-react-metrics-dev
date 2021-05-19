import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {


  test("renders the title", () => {
    render(<App />);
    debugger;

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Software Delivery Performance Metrics");
  });
});
    