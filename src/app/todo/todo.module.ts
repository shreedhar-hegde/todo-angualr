import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchComponent } from './search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ListTodoComponent, SearchComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [ListTodoComponent],
})
export class TodoModule {}
