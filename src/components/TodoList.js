import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TodoItem from './TodoItem';

@inject(({store}) => ({
  todo: store.todo
}))
@observer
class TodoList extends Component {
  _handleToggle = (id) => () => this.props.todo.toggleTodo(id)

  render() {
    const { list } = this.props.todo;
    return (
      <div className="Todo">
        {
          list.map((item, index) => <TodoItem key={index} {...item} onChange={this._handleToggle} />)
        }
      </div>
    );
  }
}

export default TodoList
