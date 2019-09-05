import React from 'react';
import Todo from './Todo.js';
import { hot } from 'react-hot-loader';
import style from './TodoList.css';

const TodoList = props => (
  <div className={style.TodoList}>
    {props.tasksData.map(element => (
      <Todo key={element.id} handleClick={() => props.removeTask(element.id)} elementName={element.name} />
    ))}
  </div>
);

export default hot(module)(TodoList);
