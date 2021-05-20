import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders the title", () => {
    render(<App />);
    const region = screen.getByRole("region", {name: "Lead Times"});
    expect(region).toBeInTheDocument();
  });
  test("renders the Recovery Time section", () => {
    render(<App />);
    const region = screen.getByRole("region", {name: "Recovery Times"});
    expect(region).toBeInTheDocument();
  });

  
});
