import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.fetchTodos();
  }

  ngOnInit(): void {}
}
