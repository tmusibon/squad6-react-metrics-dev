import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  test("Input leadTime", () => {
    render(<App />);
    const addLeadTimeInput = screen.getByRole("textbox", {id: "leadTimeInput"});

    expect(addLeadTimeInput).toBeInTheDocument();
  });
  test.each(["0", "1", "8", "100"])("Submit a lead time with time %s", (leadTime) => {
    render(<App />);
  
  const status = screen.getByRole("heading", {level: 3 });
  const textbox = screen.getByRole("textbox", {id: "leadTimeInput"});
  const button = screen.getByRole("button" , {id: "leadtimeSubmit"});
  userEvent.type(textbox, leadTime);
  userEvent.click(button);
  expect(status).toHaveTextContent("From code pushed to code deployed: ".concat(leadTime).concat(" minutes"));
  });
});
