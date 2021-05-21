import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders the Deployments region", () => {
    render(<App />);
    const region = screen.getByRole("region", {name: "Deployments"});
    expect(region).toBeVisible();
  });
  test("renders the Lead Times region", () => {
    render(<App />);
    const region = screen.getByRole("region", {name: "Lead Times"});
    expect(region).toBeVisible();
  });
  test("renders the Recovery Times region", () => {
    render(<App />);
    const region = screen.getByRole("region", {name: "Recovery Times"});
    expect(region).toBeVisible();
  });
});
