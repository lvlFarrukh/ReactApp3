import React from 'react';
// import './App.css';
// import './child.css';
import Child from './Child'

function Parent(props) {

  return  (
    <div>
        <h2>This is Parent component {props.num}</h2>
        <Child num={props.num}></Child>
    </div>
  );
}

export default Parent;
