import "./App.css";
import React, { useState } from "react";
import Deployments from "./Deployments/Deployments.js";
import LeadTimes from "./lead-times/LeadTimes.js";

function App() {
  return (
    <React.Fragment>
      <h1 className="heading-text">Software Delivery Performance Metrics</h1>
      <div className="wrapper">
        <div className="deployments">
        <Deployments init={false}/>
         <LeadTimes />
         
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
