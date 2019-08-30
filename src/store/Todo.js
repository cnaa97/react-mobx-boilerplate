import { decorate, observable, action } from 'mobx';

class Todo {
  @observable list = [
    {
      id: 0,
      title: 'todo one',
      isDone: false,
    },
    {
      id: 1,
      title: 'todo two',
      isDone: true,
    },
  ]
  @action addTodo = (item = {}) => {
    this.list = [
      ...this.list,
      {
        ...item,
        id: this.list.length,
        isDone: false,
      },
    ]
  }
  @action toggleTodo = (id) => {
    this.list = this.list.filter(item => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
      return item
    })
  }
  @action removeTodo = (id) => {
    this.list = this.list.filter(item => item.id !== id)
  }
}

export default Todo;
