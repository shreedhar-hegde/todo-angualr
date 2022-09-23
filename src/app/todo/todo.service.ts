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
    { what: 'Bring Grocery', status: 'Not started' },
    { what: 'Pay bills', status: 'In progress' },
    { what: 'Exercise', status: 'Done' },
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
