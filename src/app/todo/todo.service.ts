import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Todo {
  what: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  todos = [
    { what: 'Bring Grocery', status: 'inProgress' },
    { what: 'Pay bills', status: 'pending' },
    { what: 'Exercise', status: 'done' },
  ];

  todos$ = new BehaviorSubject(this.todos);

  fetchTodos() {
    return this.todos$;
  }

  addNewTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    this.todos$.next(this.todos);
  }

  updateTodos(todos: Todo[]) {
    this.todos$.next(todos);
  }
}
