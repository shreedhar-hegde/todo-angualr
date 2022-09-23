import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ListTodoComponent],
  imports: [CommonModule, DragDropModule, MatIconModule, MatButtonModule],
  exports: [ListTodoComponent],
})
export class TodoModule {}
