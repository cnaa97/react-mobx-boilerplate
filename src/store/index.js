import { observable, extendObservable } from 'mobx'

import Todo from './Todo'

class Store {
  constructor() {
    extendObservable(this, {
      todo: new Todo(this),
    })
  }
}

export default observable(new Store());
