import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from '../todo.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AddItemComponent } from 'src/app/shared/add-item/add-item.component';
import { MatDialog } from '@angular/material/dialog';

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
  status: string = 'pending';
  what!: string;

  constructor(private todoService: TodoService, public dialog: MatDialog) {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '18vw',
      data: { status: this.status, what: this.what },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.todoService.addNewTodo(result);
    });
  }
}
