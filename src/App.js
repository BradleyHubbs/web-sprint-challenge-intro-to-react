import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { render } from 'react-dom'
import Characters from './components/Character'
import './App.css';

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

let baseURL = 'http://swapi.py4e.com/api/people/'

const App = () => {
  const [characterNames, setCharacterNames] = useState([])


useEffect(() => {
  axios
  .get(baseURL)
  .then((res) =>{
    setCharacterNames(res.data.results.map(p => p))
  })
  .catch((err) => {
    console.log('error')
  })
}, []);






    return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
      
        <Characters characterNames={characterNames} />

    </div>
  );
}

export default App;
