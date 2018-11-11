import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITasklist } from './tasklist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {

  private _url: string = "https://ed8377ec-abd3-4637-9d41-52b74a6d21b5.mock.pstmn.io/task-lists";

  constructor(private http: HttpClient) { }

  getTaskList(): Observable<ITasklist[]> {
    return this.http.get<ITasklist[]>(this._url);
  }
}
