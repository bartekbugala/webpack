import React from 'react';
import style from './TodoList.css';

const TodoList = props =>
<div className={style.TodoList}>
    {props.tasksData.map(element => <div onClick={() => props.removeTask(element.id)}>Task: {element.id} - {element.name}</div>)}
</div>

export default TodoList;