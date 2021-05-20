import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders the title", () => {
    render(<App />);
    debugger;

    const heading = screen.getAllByRole("heading", { level: 1 });
    expect(heading[0]).toHaveTextContent("Software Delivery Performance Metrics");
  });

  
});
