import React, { useState } from "react";
import '../global.css';

function LeadTimes(init) {
  const [leadTime, setLeadTime] = useState(0);
  const [newLeadTime, setNewLeadTime] = useState("");

  if(init) {
    localStorage.setItem('newLeadTime', [])
  }

  React.useEffect(() => {
    const parsedLeadTimes = JSON.parse(localStorage.getItem('leadTime') || "[]");
    setLeadTime(parsedLeadTimes)
  },[])

  React.useEffect(() => {
    localStorage.setItem('leadTime', JSON.stringify(leadTime));
  },[leadTime])

  function leadTimeInputHandler({ target: { value } }) {
    setNewLeadTime(value);
  }

  function leadTimeButtonHandler(event) {
    event.preventDefault()
    setLeadTime(newLeadTime);
    setNewLeadTime("");
  }

  return (
    <div className='box-container'>
      <h1>Lead Time</h1>
      <h3 role="status">
        From code pushed to code deployed: {leadTime} minutes.
      </h3>
      <p>Change Lead Time (in minutes)</p>
      <input type="text" id="leadTimeInput" onChange={leadTimeInputHandler} />
      <button id="leadTimeSubmit" onClick={leadTimeButtonHandler} className='button'>
        Update Lead Time
      </button>
    </div>
  );
}

export default LeadTimes;
