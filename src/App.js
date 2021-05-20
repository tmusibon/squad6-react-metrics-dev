import "./App.css";
import React,{useState} from "react";
import Deployments from './components/Deployments/Deployments.js'

function App() {
<<<<<<< HEAD
  const [leadTime, setLeadTime] = useState("0");
  const [newLeadTime, setNewLeadTime] = useState();

  function leadTimeInputHandler({target: {value}}) {
    setNewLeadTime(value);
  }

  function leadTimeButtonHandler() {
    setLeadTime(newLeadTime);
    setNewLeadTime("");
  }

  return (
    <>
      <h1>Lead Time</h1>
      <h3 role="status">From code pushed to code deployed: {leadTime} minutes.</h3>
      <p>Change Lead Time (in minutes)</p>
      <input type="text" id="leadTimeInput" onChange={leadTimeInputHandler}/> 
      <button id="leadTimeSubmit" onClick={leadTimeButtonHandler}>Update Lead Time</button>
    </>
  );
}
=======
  return (
    <React.Fragment>
      <h1 className='heading-text'>Software Delivery Performance Metrics</h1>
      <div className ='wrapper'>
        <div className='deployments'>
          <Deployments />
        </div>
    </div>
   </React.Fragment>
>>>>>>> master

  );
  }
export default App;