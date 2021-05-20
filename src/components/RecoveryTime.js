import { useState } from 'react';

function RecoveryTimes(){
    return (
        <>
        <h1>Recovery Time</h1>
        <h2>MTTR: 67.5 minutes</h2>
        <label>Start Time</label><input type="text" aria-label="Start Times" id="startTimeTextBox"></input>
        <label>Duration</label><input type="text" aria-label="Duration" id="durationTextBox"></input>
        </>
);
    }

    export default RecoveryTimes;