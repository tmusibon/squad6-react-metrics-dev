import React,{useState} from "react";

function Deployments() {
    const [deployment, setDeployment] = useState("");
    const [newInput, setNewInput] = useState();

    function inputHandler({target: {value}}) {
        setNewInput(value);
      }
    
      function deploymentHandler(){
        setDeployment(newInput);
      }
    return(
        <div>
            <h2>Software Delivery Performance Metrics</h2>
            <h1>Deployments</h1>
            <div role='deploymentList'>{deployment}</div>
            <h3>Deployment</h3>
            <input role="deploymenttime" onChange={inputHandler}/>  
            <button key='addDeployment' onClick={deploymentHandler}>Add Deployment</button>
        </div>
    )
}

export default Deployments;