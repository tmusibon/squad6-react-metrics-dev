import { useState } from 'react';

function RecoveryTimes(){
    const [newStartTime, setNewStartTime] = useState("");
    const [newDuration, setNewDuration] = useState("");
    const [recoveryTimes, setRecoveryTimes] = useState([]);
   
    function addRecoveryTimeInputHandler({target : {value}}){
        setNewStartTime(value);
    }
    function addDurationInputHandler({target: {value}}) {
        setNewDuration(value);
    }

    function addRecoveryTimeButtonHandler(){
        const entry = recoveryTimes.concat([{time: newStartTime, duration: newDuration}])
        setRecoveryTimes(entry);
        setNewStartTime("");
        setNewDuration("");
    }
 
    const statuses = recoveryTimes.map((recoveryTime) => (<li key={Date(recoveryTime.time)}>{recoveryTime.time} {recoveryTime.duration}</li>));

    return (
        <>
        <h1>Recovery Time</h1>
        <h2>MTTR: 67.5 minutes</h2>
        <ul aria-label="Recovery Times">{statuses}</ul>
        <label>Start Time</label><input type="text" onChange={addRecoveryTimeInputHandler} aria-label="Start Times" id="startTimeTextBox"></input>
        <label>Duration</label><input type="text" onChange={addDurationInputHandler} aria-label="Duration" id="durationTextBox"></input>
        <button onClick={addRecoveryTimeButtonHandler}>Add Recovery Time</button>
        </>
);
    }

    export default RecoveryTimes;