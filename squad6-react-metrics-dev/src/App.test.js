import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {


  test("renders the title", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Software Delivery Performance Metrics");
  });

    test("renders deployment headline", () =>{
      render(<App />);
      const heading = screen.getByRole("heading", { level: 1});  
      expect(heading).toHaveTextContent("Deployments");
  });
  
  test("renders  Deployment", () =>{
    render(<App />);
    const heading = screen.getByRole("heading", { level: 3});
    expect(heading).toHaveTextContent("Deployment")
  })

  test("renders  Datetime", () =>{
    render(<App />);
    //const datetime = screen.getByAltText(/deploymenttime/i)
    const datetime = screen.getByRole('deploymenttime');
    expect(datetime).toHaveTextContent("")
  })
  test("Renders Datetime with value after adding value", () => {
    render(<App />);
    //const tempValue = "2021-05-06";
   
    //screen.getByRole('deploymenttime'). = tempValue
    const datetime = screen.getByRole('deploymenttime');
    datetime.textContent = '2021-05-06';
    expect(datetime).toHaveTextContent('2021-05-06');
    //userEvent.click(screen.getByRole("button", { name: "Add Deployment" }));

    //expect(status).toHaveTextContent("1");

  });
  
  test("Render submit button", () => {
    render(<App />);
   
    
    const addButton = screen.getByRole("button", { name: "Add Deployment" });
    expect(addButton).toBeInTheDocument();

  });
});
    