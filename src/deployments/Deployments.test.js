import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Deployments from "./Deployments.js";

describe("Deployments", () => {
  test("renders deployment headline", () => {
    render(<Deployments />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Deployments");
  });

  test("renders  Deployment", () => {
    render(<Deployments />);
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent("Deployment");
  });

  test("renders  Datetime", () => {
    render(<Deployments />);
    const date = screen.getByRole("deploymentdate");
    expect(date).toHaveTextContent("");
  });
  test("Renders Datetime with value after adding value", () => {
    render(<Deployments init={true}/>);
    const tempValue = "2021-06-02";
    let date = screen.getByRole("deploymentdate");
    userEvent.type(date, tempValue);

    expect(date).toHaveValue(tempValue);
  });

  test("Render submit button", () => {
    render(<Deployments />);
    const addButton = screen.getByRole("button", { name: "Add Deployment" });
    expect(addButton).toBeInTheDocument();
  });


  test("Add deployment date and time", () => {
    render(<Deployments init={true}/>)
    const tempDate1 = "2021-06-02"; const tempTime1 = "14:26";
    console.log(localStorage.getItem('deployments'))
    addDeployment(tempDate1,tempTime1);
    const deployment = screen.getAllByRole("status");
    expect(deployment.length).toEqual(1);
    expect(deployment[0]).toHaveTextContent(tempDate1 + " " + tempTime1);
  });

  test("Add multiple deployment date and time", () => {
    render(<Deployments init={true}/>);
    const tempDate1 = "2021-06-02"; const tempTime1 = "14:26";
    addDeployment(tempDate1,tempTime1);
    let deployment = screen.getAllByRole("status");
    expect(deployment.length).toEqual(1);
    expect(deployment[0]).toHaveTextContent(tempDate1 + " " + tempTime1);

    const tempDate2 = "2021-06-03";const tempTime2 = "05:26";
    addDeployment(tempDate2,tempTime2);
    deployment = screen.getAllByRole("status");
    expect(deployment.length).toEqual(2);
    expect(deployment[1]).toHaveTextContent(tempDate2 + " " + tempTime2);
  });
  

  test("clicking on button makes it disabled", () => {
    render(<Deployments />);
    const button = screen.getByRole("button", { name: "Add Deployment" });
    fireEvent.click(button);
    expect(button.disabled).toBeTruthy();
  });

  function addDeployment(date,time){
    const dateField = screen.getByRole("deploymentdate");
    userEvent.type(dateField, date);

    const timeField = screen.getByRole("deploymenttime");
    userEvent.type(timeField, time);

    userEvent.click(screen.getByRole("button", { name: "Add Deployment" }));
  }

  test("Test deployments visible after refreshing the browser", () => {
    
    render(<Deployments />);
    const tempDate1 = "2021-06-02"; const tempTime1 = "14:26";
    addDeployment(tempDate1,tempTime1);
    let deployment = screen.getAllByRole("status");
    expect(deployment.length).toEqual(1);
    expect(deployment[0]).toHaveTextContent(tempDate1 + " " + tempTime1);

    const tempDate2 = "2021-06-03";const tempTime2 = "05:26";
    addDeployment(tempDate2,tempTime2);
    deployment = screen.getAllByRole("status");
    expect(deployment).toHaveLength(2);
    expect(deployment[1]).toHaveTextContent(tempDate2 + " " + tempTime2);
    console.log(localStorage);
    cleanup();
    render(<Deployments/>)
    console.log(localStorage);
    deployment = screen.queryAllByRole("status");
    expect(deployment).toHaveLength(2);
  });

  test("renders deployment frequency with 0 value", () => {
    render(<Deployments init={true}/>);
    const region = screen.getByRole("region");
    expect(region).toHaveTextContent("Frequency: 0/week");
  });
  
  test("renders deployment frequency with 1 value", () => {
    
    render(<Deployments init={true}/>)
    //Input date of deployment
    addDeployment("2021-06-02","14:26");
    const region = screen.getByRole("region");
    expect(region).toHaveTextContent("Frequency: 1/week");
  });

  test("renders deployment frequency with 2 deployments in the same week", () => {
    
    render(<Deployments init={true}/>)
    //Input date of deployment
    addDeployment("2021-06-02","14:26");
    addDeployment("2021-06-05","14:26");
    const region = screen.getByRole("region");
    expect(region).toHaveTextContent("Frequency: 2/week");
  });

  test("renders deployment frequency with 2 deployments in the same week and a third deployment in another week", () => {
    
    render(<Deployments init={true}/>)
    //Input date of deployment
    addDeployment("2021-04-02","14:26");
    addDeployment("2021-06-05","14:26");
    addDeployment("2021-06-03","14:26");

    const region = screen.getByRole("region");
    expect(region).toHaveTextContent("Frequency: 1.5/week");
  });

  test("renders deployment frequency with 3 deployments in different weeks", () => {
    
    render(<Deployments init={true}/>)
    //Input date of deployment
    addDeployment("2021-04-02","14:26");
    addDeployment("2021-06-05","14:26");
    addDeployment("2021-03-03","14:26");

    const region = screen.getByRole("region");
    expect(region).toHaveTextContent("Frequency: 1/week");
  });

});
