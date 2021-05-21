import "./App.css";
import React from "react";
import LeadTimes from './components/LeadTimes.js'
import RecoveryTimes from './components/RecoveryTime.js'
import Deployments from "./components/Deployments.js"

function App() {
  return (
    <React.Fragment>
      <div role="main">
        <h1 id="application-title">Software Delivery Performance Metrics</h1>
        <div className ="wrapper">
          <div role="region" title="Deployments">
            <Deployments />
          </div>
          <div role="region" title="Lead Times">
            <LeadTimes />
          </div>
          <div role="region" title="Recovery Times"> <RecoveryTimes /> </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
