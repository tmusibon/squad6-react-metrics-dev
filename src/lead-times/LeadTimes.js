import { useState } from "react";

function LeadTimes() {
  const [leadTime, setLeadTime] = useState("0");
  const [newLeadTime, setNewLeadTime] = useState();

  function leadTimeInputHandler({ target: { value } }) {
    setNewLeadTime(value);
  }

  function leadTimeButtonHandler() {
    setLeadTime(newLeadTime);
    setNewLeadTime("");
  }

  return (
    <>
      <h1>Lead Time</h1>
      <h3 role="status">
        From code pushed to code deployed: {leadTime} minutes.
      </h3>
      <p>Change Lead Time (in minutes)</p>
      <input type="text" id="leadTimeInput" onChange={leadTimeInputHandler} />
      <button id="leadTimeSubmit" onClick={leadTimeButtonHandler}>
        Update Lead Time
      </button>
    </>
  );
}

export default LeadTimes;
