import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Deployments from './Deployments.js';

describe('Deployments', () => {
    test("renders deployment headline", () =>{
        render(<Deployments />);
        const heading = screen.getByRole("heading", { level: 2});  
        expect(heading).toHaveTextContent("Deployments");
    });
    
    test("renders  Deployment", () =>{
      render(<Deployments />);
      const heading = screen.getByRole("heading", { level: 3});
      expect(heading).toHaveTextContent("Deployment")
    })
  
    test("renders  Datetime", () =>{
      render(<Deployments />);
      //const datetime = screen.getByAltText(/deploymenttime/i)
      const datetime = screen.getByRole('deploymenttime');
      expect(datetime).toHaveTextContent("")
    })
    test("Renders Datetime with value after adding value", () => {
      render(<Deployments />);
      //const tempValue = "2021-05-06";
     
      //screen.getByRole('deploymenttime'). = tempValue
      const datetime = screen.getByRole('deploymenttime');
      //datetime.textContent = '2021-05-06';
      userEvent.type(datetime,'2021-05-06');
  
      expect(datetime).toHaveValue('2021-05-06');
      //userEvent.click(screen.getByRole("button", { name: "Add Deployment" }));
  
      //expect(status).toHaveTextContent("1");
  
    });
    
    test("Render submit button", () => {
      render(<Deployments />);
     
      
      const addButton = screen.getByRole("button", { name: "Add Deployment" });
      expect(addButton).toBeInTheDocument();
  
    });
  
    test("Add deployment test", () => {
      render(<Deployments />);
     
      const datetime = screen.getByRole('deploymenttime');
      userEvent.type(datetime,'2021-05-06');
  
      userEvent.click(screen.getByRole("button", { name: "Add Deployment" }));
      const deployment = screen.getByRole("deploymentList");
      expect(deployment).toHaveTextContent('2021-05-06');
  
    });

})