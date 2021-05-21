import { useState } from 'react';
import '../global.css';

function RecoveryTimes() {
    const [newStartTime, setNewStartTime] = useState("");
    const [newDuration, setNewDuration] = useState("");
    const [recoveryTimes, setRecoveryTimes] = useState([]);

    function clearState() {
        setNewDuration("");
        setNewStartTime("");
        return 0;
    }

    function addRecoveryTimeInputHandler({ target: { value } }) {
        setNewStartTime(value);
    }
    function addDurationInputHandler({ target: { value } }) {
        setNewDuration(value);
    }

    function addRecoveryTimeButtonHandler() {
        const entry = recoveryTimes.concat([{ time: newStartTime, duration: newDuration }])
        setRecoveryTimes(entry);
        clearState();
    }

    const statuses = recoveryTimes.map((recoveryTime) => (<li key={Date(recoveryTime.time)}>{recoveryTime.time} {recoveryTime.duration}</li>));

    return (
        <>
            <h1>Recovery Time</h1>
            <h2>MTTR: 67.5 minutes</h2>
            <ul role="status">{statuses}</ul>
            <label htmlFor="startTimeInput">Start Time</label><input type="text" onChange={addRecoveryTimeInputHandler} id="startTimeInput"></input>
            <label htmlFor="durationInput">Duration</label><input type="number" onChange={addDurationInputHandler} id="durationInput"></input>
            <button onClick={addRecoveryTimeButtonHandler} className="button">Add Recovery Time</button>
        </>
    );
}

export default RecoveryTimes;