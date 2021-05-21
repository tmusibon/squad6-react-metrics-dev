import { useState } from 'react';

function RecoveryTimes(){
    const [newStartTime, setNewStartTime] = useState();
    const [newDuration, setNewDuration] = useState();
    const [recoveryTimes, setRecoveryTimes] = useState([]);
   
    function addRecoveryTimeInputHandler({target : {value}}){
        setNewStartTime(value);
    }
    function addDurationInputHandler({target: {value}}) {
        setNewDuration(value);
    }

    function addRecoveryTimeButtonHandler(){
        setRecoveryTimes(recoveryTimes.concat([[newStartTime, newDuration]]));
    }
 
    const statuses = recoveryTimes.map((recoveryTime) => <li key={recoveryTime[0]}>{recoveryTime[0]}: {recoveryTime[1]} minutes</li>);

    return (
        <>
        <h1>Recovery Time</h1>
        <h2>MTTR: 67.5 minutes</h2>
        <ul>{recoveryTimes}</ul>
        <label>Start Time</label><input type="text" onChange={addRecoveryTimeInputHandler} aria-label="Start Times" id="startTimeTextBox"></input>
        <label>Duration</label><input type="text" onChange={addDurationInputHandler} aria-label="Duration" id="durationTextBox"></input>
        <button onClick={addRecoveryTimeButtonHandler}>Add Recovery Time</button>
        </>
);
    }

    export default RecoveryTimes;