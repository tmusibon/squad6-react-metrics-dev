import "./App.css";
import React,{useState} from "react";
import LeadTimes from './components/LeadTimes.js'

function App() {
  return (
    <React.Fragment>
      <div role="main">
      <h1 id="application-title">Software Delivery Performance Metrics</h1>
      <div className ="wrapper">
        <div role="region" id="leadTimes">
          <LeadTimes />
        </div>
      </div>
    </div>
   </React.Fragment>

  );
  }
export default App;