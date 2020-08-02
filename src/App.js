import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext'

function App() {
  let number = useState(7)
  return (
    <ValueContext.Provider value={number}>
      
      <div>
          <Parent num={number}></Parent>
      </div>

    </ValueContext.Provider>
  );
}

export default App;
