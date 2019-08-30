import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './TodoForm.css'

@inject(({store}) => ({
  todo: store.todo
}))
class TodoForm extends Component {
  state = {
    title: ''
  }

  _handleInput = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  _handleAdd = () => {
    const { title } = this.state;
    if (title.length) {
      this.props.todo.addTodo({
        title
      })
      this.setState({
        title: ''
      })
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div className="TodoForm">
        <input type="text" value={this.state.title} onChange={this._handleInput} />
        <button onClick={this._handleAdd}>ADD</button>
      </div>
    );
  }
}

export default TodoForm
