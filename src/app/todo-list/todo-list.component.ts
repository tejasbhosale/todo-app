import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  val: string;
  viewValue: string;
  todoitems: any;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  priority: any[] = [
    { val: 'low', viewValue: 'Low' },
    { val: 'med', viewValue: 'Medium' },
    { val: 'high', viewValue: 'High' }
  ];

  constructor() { }

  ngOnInit() {
    this.todoitems = [];
  }
  value = '';
  onEnter(value: string) {
    if (value.length > 0) {
      this.value = value;
      this.todoitems.push(value);
    }
  }
}
