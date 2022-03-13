import { makeObservable, observable, action, computed } from 'mobx';

interface Todo {
  id: number;
  title: string;
  description: string;
}

class TodoStore {

  private static _origin: TodoStore;

  static get origin(): TodoStore {
    if (!TodoStore._origin) {
      TodoStore._origin = new TodoStore();
    }

    return TodoStore._origin;
  }

  constructor() {
    makeObservable(this);
  }

  @observable private _todos: Todo[] = [];

  @action addTodo(title: string, description: string) {
    const newTodo: Todo = {
      id: this._todos.length,
      title,
      description,
    }

    this._todos.push(newTodo);
  }

  @action removeTodo(todoId: number) {
    this._todos = this._todos.filter(todo => todoId !== todo.id);
  }

  @computed get todosLen(): number {
    return this._todos.length;
  }

  get todos(): Todo[] {
    return this._todos;
  }

}

const todoStore = new TodoStore();

export { todoStore }
