import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTodoComponent } from './list-todo/list-todo.component';

@NgModule({
  declarations: [ListTodoComponent],
  imports: [CommonModule],
  exports: [ListTodoComponent],
})
export class TodoModule {}
