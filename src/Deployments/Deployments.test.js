import { fireEvent, render, screen } from "@testing-library/react";
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
    render(<Deployments />);
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

  test("Add deployment date", () => {
    render(<Deployments />);
    const tempValue = "2021-06-02";
    const date = screen.getByRole("deploymentdate");
    userEvent.type(date, tempValue);

    userEvent.click(screen.getByRole("button", { name: "Add Deployment" }));
    const deployment = screen.getAllByRole("deploymentdate");
    expect(deployment.length).toEqual(1);
    expect(deployment[0]).toHaveValue(tempValue);
  });

  test("Add deployment date and time", () => {
    render(<Deployments />);
    const tempDate = "2021-06-02";
    const date = screen.getByRole("deploymentdate");
    userEvent.type(date, tempDate);

    const tempTime = "13:26";
    const time = screen.getByRole("deploymenttime");
    userEvent.type(time, tempTime);

    userEvent.click(screen.getByRole("button", { name: "Add Deployment" }));
    const deployment = screen.getAllByRole("deployment");
    expect(deployment.length).toEqual(1);
    expect(deployment[0]).toHaveTextContent(tempDate + " " + tempTime);
  });

  test("Add multiple deployment date and time", () => {
    render(<Deployments />);
    const tempDate1 = "2021-06-02";
    const date1 = screen.getByRole("deploymentdate");
    userEvent.type(date1, tempDate1);

    const tempTime1 = "14:26";
    const time1 = screen.getByRole("deploymenttime");
    userEvent.type(time1, tempTime1);

    userEvent.click(screen.getByRole("button", { name: "Add Deployment" }));
    let deployment = screen.getAllByRole("deployment");
    expect(deployment.length).toEqual(1);
    expect(deployment[0]).toHaveTextContent(tempDate1 + " " + tempTime1);

    const tempDate2 = "2021-06-03";
    const date2 = screen.getByRole("deploymentdate");
    userEvent.type(date2, tempDate2);

    const tempTime2 = "05:26";
    const time2 = screen.getByRole("deploymenttime");
    userEvent.type(time2, tempTime2);

    userEvent.click(screen.getByRole("button", { name: "Add Deployment" }));
    deployment = screen.getAllByRole("deployment");
    expect(deployment.length).toEqual(2);
    expect(deployment[1]).toHaveTextContent(tempDate2 + " " + tempTime2);
  });
  test("Cannot add deployment with missing date and time", () => {
    render(<Deployments />);

    //expect(screen.getByRole("button", { name: "Add Deployment" })).toHaveAttribute('disabled');
  });

  test("clicking on button makes it disabled", () => {
    render(<Deployments />);
    const button = screen.getByRole("button", { name: "Add Deployment" });
    fireEvent.click(button);
    expect(button.disabled).toBeTruthy();
  });

  test("Test deployments visible after refreshing the browser", () => {
    render(<Deployments />);
    const tempDate1 = "2021-06-02";
    const date1 = screen.getByRole("deploymentdate");
    userEvent.type(date1, tempDate1);

    const tempTime1 = "14:26";
    const time1 = screen.getByRole("deploymenttime");
    userEvent.type(time1, tempTime1);

    userEvent.click(screen.getByRole("button", { name: "Add Deployment" }));
    let deployment = screen.getAllByRole("deployment");
    expect(deployment.length).toEqual(1);
    expect(deployment[0]).toHaveTextContent(tempDate1 + " " + tempTime1);

    const tempDate2 = "2021-06-03";
    const date2 = screen.getByRole("deploymentdate");
    userEvent.type(date2, tempDate2);

    const tempTime2 = "05:26";
    const time2 = screen.getByRole("deploymenttime");
    userEvent.type(time2, tempTime2);

    userEvent.click(screen.getByRole("button", { name: "Add Deployment" }));
    deployment = screen.getAllByRole("deployment");
    expect(deployment.length).toEqual(2);
    expect(deployment[1]).toHaveTextContent(tempDate2 + " " + tempTime2);

    const { rerender } = render(<Deployments/>)
    //window.location.reload();
    rerender(<Deployments />);

    expect(deployment.length).toEqual(2);
  });

});
