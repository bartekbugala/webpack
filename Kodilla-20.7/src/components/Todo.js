import React from 'react';

const Todo = props => (
  <div onClick={props.handleClick}>
    Zadanie: {props.elementId} - {props.elementName}
  </div>
);
export default Todo;
