import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';

function App() {
  let [number, setNumber] = useState(49)
  return (
    <div>
        <Parent num={number}></Parent>
        <button onClick={ ()=> setNumber(number + 2) }>Click Here!</button>
    </div>
  );
}

export default App;
