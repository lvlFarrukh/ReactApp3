import React, { useContext } from 'react';
// import './App.css';
// import './child.css';
import Child from './Child';
import ValueContext from './ValueContext'

function Parent() {
  let num = useContext(ValueContext)
  return  (
    <div>
        <h2>This is Parent component {num[0]}</h2>
        <Child num={num[0]}></Child>
        {/* <button onClick={ ()=> num[1](++num[0 ]) }>Click Here!</button> */}
    </div>
  );
}

export default Parent;
