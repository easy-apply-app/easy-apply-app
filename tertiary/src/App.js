
import logo from './logo.svg';
import './App.css';
import cms from "./api/cms"
import app from "./api/app"
import React, {useEffect, useState} from "react"


function App() {
const [institutions,setInstitutions] = useState([])
  useEffect(() => {
    if(app.checkIfCan){
      const responce = cms.getAllDAta()
      setInstitutions(responce)
    }
   const resp = JSON.parse(window.localStorage.getItem('institutions'))
   setInstitutions(resp)
  },[]);

  return (
    <div className="App">
      {/* <button onClick={cms.getAllDAta}>getData</button> */}
      <header className="App-header">

      {institutions.map(({name}) => {
         <div>{name}</div>
       })}
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
