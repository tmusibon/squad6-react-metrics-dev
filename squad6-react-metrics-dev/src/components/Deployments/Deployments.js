import React,{useState} from "react";
import '../../global.css';

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
        <div className='box-container'>
            <h2>Deployments</h2>
            <div role='deploymentList'>{deployment}</div>
            <h3>Deployment</h3>
            <input role="deploymenttime" onChange={inputHandler} className='deploymentDate'/>  
            <button key='addDeployment' onClick={deploymentHandler} className='button'>Add Deployment</button>
        </div>
    )
}

export default Deployments;