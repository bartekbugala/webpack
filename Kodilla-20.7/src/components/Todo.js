import React from 'react';
import { hot } from 'react-hot-loader';
//import style from './Todo.css';

const Todo = props => 
  <div onClick={props.handleClick}>
    Task: {props.elementId} - {props.elementName}
  </div>
;

export default hot(module)(Todo);
