import React from 'react';
import Todo from './Todo.js';
import style from '../sass/style.scss';

const TodoList = props => (
  <div className={style.TodoList}>
    {props.tasksData.map(element => (
      <Todo key={element.id} handleClick={() => props.removeTask(element.id)} elementName={element.name} />
    ))}
  </div>
);

export default TodoList;
