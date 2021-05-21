import React, { useState } from "react";
import "../global.css";


function Deployments({init}) {
  const [newInputDate, setNewInputDate] = useState("");
  const [newInputTime, setNewInputTime] = useState("");
  const [deployments, setDeployments] = useState([]);
  const [weeklyAverage, setWeeklyAverage] = useState(0);
  //disable the add Deployment button when an input is empty
  const enabled = newInputDate.length > 0 && newInputTime.length > 0;
  
  if(init){
    localStorage.setItem('deployments',[]);
  }

  React.useEffect(() => {
    const parsedDeployments = JSON.parse(localStorage.getItem('deployments') || "[]")
    setDeployments(parsedDeployments)
  },[])

  React.useEffect(() => {
    localStorage.setItem('deployments', JSON.stringify(deployments))
  },[deployments])

  const styleEnabled = {
    backgroundColor: "#008CBA" /* blue */,
    border: "2px solid black",
    color: "white",
    padding: "12px",
    textAlign: "center",
    display: "block",
    fontSize: "16px",
    marginTop: "15px",
    cursor: "pointer",
    marginBottom: "15px",
  };

//const dataStorage = window.localStorage;

  function inputHandlerDate({ target: { value } }) {
    setNewInputDate(value);
  }

  function inputHandlerTime({ target: { value } }) {
    setNewInputTime(value);
  }

  function deploymentHandler(event) {
    event.preventDefault();
    setDeployments(deployments.concat(newInputDate + " " + newInputTime));
    calculateDeploymentsWeeklyAverage();
  }

  function calculateDeploymentsWeeklyAverage(){
    let deploymentsInLocalStorage = localStorage.getItem('deployments');
    console.log(deploymentsInLocalStorage);
    
  
    setWeeklyAverage(1);
  }
  const deploymentItems = deployments.map((item, index) => (
    <li role="status" key={index}>
      {item}
    </li>
  ));
  return (
    <div className="box-container">
      <h2>Deployments</h2>
      <div role="deploymentList">
        <ol type="1">{deploymentItems}</ol>
      </div>
      <div role="region" aria-label="Frequency">
        Frequency: {weeklyAverage}/week
      </div>
      <h3>Deployment</h3>
      <input
        role="deploymentdate"
        onChange={inputHandlerDate}
        className="deploymentDate"
        type="date"
      />

      <input role="deploymenttime" onChange={inputHandlerTime} type="time" />
      <button
        key="addDeployment"
        onClick={deploymentHandler}
        className="button"
        disabled={!enabled}
        style={
          newInputDate.length > 0 && newInputTime.length > 0
            ? { styleEnabled }
            : { backgroundColor: "#c3bbbb", color: "black", cursor: "default" }
        }
      >
        Add Deployment
      </button>
    </div>
  );
}

export default Deployments;
