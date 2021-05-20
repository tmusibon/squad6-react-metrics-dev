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
        expect(startTimesTextBox).toBeInTheDocument();
    });
    test("Recovery times contains the duration input box", () => {
        render(<RecoveryTimes />);
        
        const startTimesTextBox = screen.getByRole("textbox", {name: "Duration"});
        expect(startTimesTextBox).toBeInTheDocument();
    });
});
