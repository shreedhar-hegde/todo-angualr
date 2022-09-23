import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from '../todo.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  todos$: Observable<Todo[]>;
  pending!: string[];
  inProgress!: string[];
  done!: string[];

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.fetchTodos();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  filterTodos({ todos, status }: { todos: Todo[]; status: string }) {
    return todos
      .filter((todo: Todo) => todo.status === status)
      .map((todo: Todo) => todo.what);
  }

  ngOnInit(): void {
    this.todos$.subscribe((todos: Todo[]) => {
      this.done = this.filterTodos({ todos, status: 'done' });
      this.inProgress = this.filterTodos({ todos, status: 'inProgress' });
      this.pending = this.filterTodos({ todos, status: 'pending' });
    });
  }
}
