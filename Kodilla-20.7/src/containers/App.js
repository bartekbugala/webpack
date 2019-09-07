import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import TodoForm from '../components/TodoForm.js';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appTitle: 'To do List',
      data: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(val) {
    const todo = {
      name: val || 'default',
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <TodoForm addTask={this.addTodo} />
        <Title title={this.state.appTitle} taskAmount={this.state.data.length} />
        <TodoList tasksData={this.state.data} removeTask={this.removeTodo} />
      </div>
    );
  }
}

export default hot(module)(App);
