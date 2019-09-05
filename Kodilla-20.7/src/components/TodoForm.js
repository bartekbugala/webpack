import React from 'react';
import { hot } from 'react-hot-loader';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTask(this.state.value);
    this.setState({
      value: ''
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter task name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add task" />
      </form>
    );
  }
}
export default hot(module)(TodoForm);
