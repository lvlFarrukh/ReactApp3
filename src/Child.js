import React from 'react';
// import './App.css';
import './child.css';

function Child(props) {

  return  (
    <div>
        <h2>This is Child component {props.num}</h2>
    </div>
  );
}

export default Child;
