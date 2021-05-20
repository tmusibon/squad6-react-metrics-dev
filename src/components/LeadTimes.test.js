import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LeadTimes from './LeadTimes.js';

describe("LeadTimes", () => {
  test("All elements render correctly", () => {
    render(<LeadTimes />);
    const heading = screen.getByRole("heading", { level: 1});

    expect(heading).toHaveTextContent("Lead Time")
  });

  test("Code commit to Deploy", () => {
    render(<LeadTimes />);
    const status = screen.getByRole("status");

    expect(status).toHaveTextContent("From code pushed to code deployed: 0 minutes")
  });
  
  test.each(["0", "1", "8", "100"])("Submit a lead time with time %s", (leadTime) => {
    render(<LeadTimes />);
  
  const status = screen.getByRole("status");
  const textbox = screen.getByRole("textbox", {id: "leadTimeInput"});
  const button = screen.getByRole("button" , {id: "leadtimeSubmit"});
  userEvent.type(textbox, leadTime);
  userEvent.click(button);
  expect(status).toHaveTextContent("From code pushed to code deployed: ".concat(leadTime).concat(" minutes"));
  });
});
