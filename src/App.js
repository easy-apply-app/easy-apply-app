import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import app from './Api/app'
import cms from './Api/cms'

function App() {
const [institutions, setInstitutions] = useState([]);

const checkAndSync = async () => {
  if (app.checkIfCanSync()) {
    const response = await cms.getAllInstitutions();
    setInstitutions(response)
    return;
  }

  const response =  JSON.parse(window.localStorage.getItem('institutions'));
  setInstitutions(response);
}

  useEffect(() => checkAndSync(), []);



  return (
    <div>
      {institutions.map(({ name }) => (
      <div>{name}</div>))}
    </div>
  );
}

export default App;

