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
  iterm: any;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  planModel: any = {
    start_time: new Date()
  };
  setPriority: boolean;
  color: string;

  priority: any[] = [
    { val: 'low', viewValue: 'Low' },
    { val: 'medium', viewValue: 'Medium' },
    { val: 'high', viewValue: 'High' }
  ];
  selectedValue: string = this.priority[0].val;
  selected = 'low';

  constructor() { }

  ngOnInit() {
    this.todoitems = [];
  }
  value = '';
  onEnter(value: string) {

    if (value.length > 0) {
      this.value = value;
      let item = {
        "value": value,
        "selected": this.selected
      };
      this.todoitems.push(item);
    }
  }
}
