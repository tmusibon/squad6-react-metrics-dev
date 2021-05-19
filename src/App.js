import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [leadTime, setLeadTime] = useState("0");
  const [leadTimeText, setLeadTimeText] = useState("From code pushed to code deployed: 9 minutes");
  
  function leadTimeInputHandler({target: {value}}) {
    setLeadTime(value);
  }

  function leadTimeButtonHandler() {
    const textPreamble = "From code pushed to code deployed: ";
    setLeadTimeText(textPreamble.concat(leadTime).concat(" minutes"));
  }

  return (
    <>
      <h1>Lead Time</h1>
      <h3>{leadTimeText}</h3>
      <p>Change Lead Time (in minutes)</p>
      <input type="Text" id="leadTimeInput" onChange={leadTimeInputHandler}/> 
      <button id="leadTimeSubmit" onClick={leadTimeButtonHandler}>Update Lead Time</button>
    </>
  );
}

export default App;
