import "./App.css";
import React from "react";
import LeadTimes from './leadtimes/LeadTimes.js';
import RecoveryTimes from './recoverytimes/RecoveryTime.js';
import Deployments from "./deployments/Deployments.js";

function App() {
  return (
    <React.Fragment>
      <div role="main">
        <h1 id="application-title">Software Delivery Performance Metrics</h1>
        <div className ="wrapper">
          <div role="region" title="Deployments" className='deployments'>
            <Deployments />
          </div>
          <div role="region" title="Recovery Times" className='recovery-time'> 
            <RecoveryTimes /> 
          </div>
          <div role="region" title="Lead Times" className='lead-time'>
            <LeadTimes />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;