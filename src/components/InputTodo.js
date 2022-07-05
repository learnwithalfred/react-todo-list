/* eslint-disable linebreak-style */
/* eslint-disable react/state-in-constructor */
/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    // this.setState({
    //   title: e.target.value,
    // });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          onChange={this.onChange}
          value={this.state.title}
          name="title"
          className="input-text"
        />
        <button type="submit" className="input-submit">
          Submit
        </button>
      </form>
    );
  }
}
export default InputTodo;
