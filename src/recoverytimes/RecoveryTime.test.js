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
        
        const startTimesTextBox = screen.getByRole("textbox", {name: "Start Time"});
        expect(startTimesTextBox).toBeVisible();
    });
    test("Recovery times contains the duration input box", () => {
        render(<RecoveryTimes />);
        
        const startTimesTextBox = screen.getByRole("spinbutton", {name: "Duration"});
        expect(startTimesTextBox).toBeVisible();
    });
    test.each([["1969/01/01","9"],["1997/12/19","57"]])("User submits and expects to see it rendered in the status area", ([time, duration]) => {
        render(<RecoveryTimes />);
        const status = screen.getByRole("status");
        const button = screen.getByRole("button", {name: "Add Recovery Time"});
        const startTimeInput = screen.getByRole("textbox", {name: "Start Time"});
        const durationInput = screen.getByRole("spinbutton", {name: "Duration"});

        userEvent.type(startTimeInput, time);
        userEvent.type(durationInput, duration);
        userEvent.click(button);
        expect(status).toHaveTextContent(time);
        expect(status).toHaveTextContent(duration);
    });
});
