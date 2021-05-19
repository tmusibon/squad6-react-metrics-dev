import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  test("Test Lead Time display", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1});

    expect(heading).toHaveTextContent("Lead Time")
  });

  test("Code commit to Deploy", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 3});

    expect(heading).toHaveTextContent("From code pushed to code deployed: 9 minutes")
  });

  test("Submit button displays on screen", () => {
    render(<App />);
    const addLeadTimeButton = screen.getByRole("button", {id: "leadTimeSubmit"});

    expect(addLeadTimeButton).toBeInTheDocument();
  });
});
