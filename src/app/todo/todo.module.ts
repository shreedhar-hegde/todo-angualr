import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ListTodoComponent],
  imports: [CommonModule, DragDropModule],
  exports: [ListTodoComponent],
})
export class TodoModule {}
