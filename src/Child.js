import React from 'react';
// import './App.css';
import './child.css';
import numberReducer from './UseReducer'

function Child(props) {
  let [number, act] = React.useReducer(numberReducer, props.num)
  return (  
    <div>
        <h2>This is Child component {number}</h2>
        <button onClick={ ()=> { act({ value: 'INCREMENT'}) } }>+ Child</button>
        <button onClick={ ()=> { act({ value: 'DECREMENT'}) } }>- Child</button>
        <button onClick={ ()=> { act({ value: 'ADDSPECIFICVALUE', addVal: 7}) } }>Update Child</button>
    </div>
  );
}

export default Child;
