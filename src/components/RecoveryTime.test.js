import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RecoveryTimes from './RecoveryTime.js';

describe("RecoveryTime", () =>{
    test("Recovery Time is displayed", () =>{
        render(<RecoveryTimes />);

        const heading = screen.getByRole("heading", {level: 1});
        expect(heading).toHaveTextContent("Recovery Time")

    });

    test("MTTR Display", () =>{
        render(<RecoveryTimes />);

        const heading = screen.getByRole("heading", {level: 2});
        expect(heading).toHaveTextContent("MTTR: 67.5 minutes")

    });
    test("Recovery times contains the start time input box", () => {
        render(<RecoveryTimes />);
        
        const startTimesTextBox = screen.getByRole("textbox", {name: "Start Times"});
        expect(startTimesTextBox).toBeVisible();
    });
    test("Recovery times contains the duration input box", () => {
        render(<RecoveryTimes />);
        
        const startTimesTextBox = screen.getByRole("textbox", {name: "Duration"});
        expect(startTimesTextBox).toBeVisible();
    });
    test("User submits %s and expects submission shown in the status", () => {
        render(<RecoveryTimes />);
        const status = screen.getAllByRole("listitem");
        const button = screen.getByRole("button", {name: "Add Recovery Time"});
        const startTimes = screen.getByRole("textbox", {name: "Start Times"});
        const duration = screen.getByRole("textbox", {name: "Duration"});
        const userInput = [{userStartTime: "1969/12/12", userDuration: "9"},{userStartTime: "1997/12/19", userDuration: "57"}];

        userEvent.type(startTimes, userInput[0].userStartTime);
        userEvent.type(duration, userInput[0].duration);
        userEvent.click(button);
        expect(status).toHaveTextContent(userInput[0].startTimes);
    });
});
