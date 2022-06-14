class Todo {
  constructor() {
    this.todos = [];
  }

  addTodo(description) {
    this.todos.push({
      index: this.todos.length + 1,
      completed: false,
      description,
    });
  }

  reOrder() {
    const helpertodos = [];
    let helpertodo;
    this.todos.forEach((singleTodo) => {
      helpertodo = {
        index: helpertodos.length + 1,
        completed: singleTodo.completed,
        description: singleTodo.description,
      };
      helpertodos.push(helpertodo);
    });
    this.todos = helpertodos;
  }

  removeTodo(index) {
    this.todos = this.todos.filter((singleTodo) => singleTodo.index !== index);
    this.reOrder();
  }

  editTodo(index, description) {
    this.todos = this.todos.map((singleTodo) => {
      if (singleTodo.index === index) {
        singleTodo.description = description;
      }
      return singleTodo;
    });
  }

  clearCompleted() {
    this.setTodos(this.todos.filter((singleTodo) => singleTodo.completed === false));
    this.reOrder();
  }

  complete(index) {
    this.todos = this.todos.map((singleTodo) => {
      if (singleTodo.index === index) {
        singleTodo.completed = !singleTodo.completed;
      }
      return singleTodo;
    });
  }

  getTodos() {
    return this.todos;
  }

  setTodos(newTodoes) {
    this.todos = newTodoes;
  }
}

export default Todo;
