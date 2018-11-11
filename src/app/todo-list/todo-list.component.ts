import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { TasklistService } from '../tasklist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  val: string;
  viewValue: string;
  todoitems: any;
  item: any;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  planModel: any = {
    start_time: new Date()
  };
  setPriority: boolean;
  color: String;
  value: String;
  events: String[] = [];
  differenceDays: any = 0;
  flagOverdue: Boolean = false;

  priority: any[] = [
    { val: 'low', viewValue: 'Low' },
    { val: 'medium', viewValue: 'Medium' },
    { val: 'high', viewValue: 'High' }
  ];
  selectedValue: string = this.priority[0].val;
  selected = 'low';

  constructor(private _tasklistService: TasklistService) { }

  ngOnInit() {
    this._tasklistService.getTaskList()
      .subscribe(data => this.todoitems = data);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.differenceDays = event.value.getDate() - new Date().getDate();
    if (this.differenceDays && this.differenceDays < 0) {
      this.differenceDays = this.differenceDays * -1;
      this.flagOverdue = true;
    } else {
      this.flagOverdue = false;
    }
  }

  onEnter(value: string) {
    console.log(this.differenceDays);
    if (value.length > 0) {
      this.value = value;
      let item = {
        "value": value,
        "selected": this.selected,
        "overdue": this.differenceDays,
        "flagOverdue": this.flagOverdue
      };
      this.todoitems.push(item);
      console.log(this.todoitems);
    }
  }
}
