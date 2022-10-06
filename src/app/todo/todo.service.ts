import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as uuid from 'uuid';

export interface Todo {
  id: string;
  what: string;
  status: string;
  finishBy?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  todos: Todo[] = [
    {
      id: uuid.v4(),
      what: 'Bring Grocery',
      status: 'inProgress',
      finishBy: new Date('09-27-2022'),
    },
    {
      id: uuid.v4(),
      what: 'Pay bills',
      status: 'pending',
      finishBy: new Date('09-28-2022'),
    },
    {
      id: uuid.v4(),
      what: 'Pay bills',
      status: 'pending',
      finishBy: new Date('09-28-2022'),
    },
    {
      id: uuid.v4(),
      what: 'Exercise',
      status: 'done',
      finishBy: new Date('09-29-2022'),
    },
  ];

  todos$ = new BehaviorSubject<Todo[]>(this.todos);

  searchInput = new BehaviorSubject<string>('');

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
