import React,{useState} from "react";
import '../../global.css';

function Deployments() {
    const [deployment, setDeployment] = useState("");
    const [newInputDate, setNewInputDate] = useState();
    const [newInputTime, setNewInputTime] = useState();
    const [deployments, setDeployments] = useState([])

    function inputHandlerDate({target: {value}}) {
        //const listDeployment = [];

        setNewInputDate(value);
      }

      function inputHandlerTime({target: {value}}) {
        //const listDeployment = [];

        setNewInputTime(value);
      }
    
      function deploymentHandler(){
      
        setDeployments(deployments.concat(newInputDate + " " + newInputTime));
        
      
      }
      const deploymentItems = deployments.map((item) => (
       
            <li role='deployment' key={item}>{item}</li>
        
      ))
    return(
        <div className='box-container'>
            <h2>Deployments</h2>
            <div role='deploymentList'><ol type="1">{deploymentItems}</ol></div>
            <h3>Deployment</h3>
            <input 
                role="deploymentdate" 
                onChange={inputHandlerDate} 
                className='deploymentDate'
                type='date'
            /> 
        
            <input 
                role="deploymenttime" 
                onChange={inputHandlerTime} 
                type='time'
            />
            <button 
                key='addDeployment' 
                onClick={deploymentHandler} 
      
                className='button'>Add Deployment</button>
        </div>
    )
}

export default Deployments;