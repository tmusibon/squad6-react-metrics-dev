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
  test("Submit the Lead time", () => {
    render(<App />);
  
  const status = screen.getByRole("heading", {level: 3 });
  const textbox = screen.getByRole("textbox", {id: "leadTimeInput"});
  const button = screen.getByRole("button" , {id: "leadtimeSubmit"});

  userEvent.type(textbox, "0");
  userEvent.click(button);
  expect(status).toHaveTextContent("From code pushed to code deployed: 0 minutes");
  //userEvent.click
  //when enter the input we should expect that content to be displayed
  //enter the input
  //click the button
  //check that the input is displayed.

  // Nous avons 3 cases:
  // le user ecrire un '0' dans le textboite
  // qu'est que le result de l'input?
  //<h3>From code pushed to code deployed: 0 minutes</h3>






  
  // le user ecrire un '1' dans le textboite
  // qu'est que le result de l'input?
  // le user ecrire un '9' dans le textboite
  // qu'est que le result de l'input?
  }); 
});
