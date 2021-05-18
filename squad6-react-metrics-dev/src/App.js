import "./App.css";
import React,{useState} from "react";

function App() {
  const [deployment, setDeployment] = useState("");
  
  function deploymentHandler(){
  // setDeployment({deployment:deploymenttime});
  }
  return (
    <>
  <h2>Software Delivery Performance Metrics</h2>

  <h1>Deployments</h1>
  <div role='deploymentList'>{deployment}</div>
  <h3>Deployment</h3>
  
  <input role="deploymenttime" type="text" id="start" name="trip-start"/> 
  
  <button key='addDeployment' onClick={deploymentHandler}>Add Deployment</button>
  </>

  );
  }
export default App;
