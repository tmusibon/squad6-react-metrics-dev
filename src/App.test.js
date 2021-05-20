import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {


  test("renders the lead time section", () => {
    render(<App />);
    const region = screen.getByRole("region", {id: "leadTimes"});
    expect(region).toBeInTheDocument();
  });
});