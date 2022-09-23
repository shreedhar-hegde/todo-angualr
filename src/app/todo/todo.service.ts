import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  fetchTodos() {
    return new Observable<Todo[]>((observer: any) => {
      observer.next(this.todos),
        (error: any) => {
          observer.error(error);
        };
    });
  }
}
