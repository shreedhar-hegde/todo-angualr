import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  input = '';

  ngOnInit(): void {}

  taskChange(input: any) {
    this.todoService.searchInput.next(input.target.value);
  }
}
