import React from 'react';
import uuid from 'uuid';
//import style from './App.css';
import style from '../sass/style.scss';
import TodoForm from '../components/TodoForm.js';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import { hot } from 'react-hot-loader';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

const cookieAge = 5184000;

class App extends React.Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    if((cookies.get('data')) === undefined) {
      cookies.set('data', [], { path: '/', maxAge: 15 });
    }
    this.state = {
      appTitle: 'To do List',
      data: cookies.get('data')
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(val) {
    const { cookies } = this.props;
    const todo = {
      name: val || 'default',
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    cookies.set('data', data, { path: '/', maxAge: cookieAge });
    this.setState({ data });
  }
  removeTodo(id) {
    const { cookies } = this.props;
    const remainder = this.state.data.filter(todo => todo.id !== id);
    cookies.set('data', remainder, { path: '/', maxAge: cookieAge });
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

 App.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default hot(module) (withCookies(App));