import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appTitle: 'To do List',
            data: [
                {
                    id: 20,
                    name: 'Webpack'
                },
                {
                    id: 25,
                    name: 'Express.js'
                },
                {
                    id: 26,
                    name: 'Czat'
                },
                {
                    id: 27,
                    name: 'Redux'
                }
            ]
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
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
                <Title title={this.state.appTitle} taskAmount={this.state.data.length} />
            </div>
        );
    }
}

export default App;