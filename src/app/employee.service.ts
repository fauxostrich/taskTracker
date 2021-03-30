import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './employee/task.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  storeTask(logTask:any){
    this.http.post("http://localhost:3000/tasks", logTask).
    subscribe(result=>console.log(result), error=>console.log(error));
  }
  loadTask():Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:3000/tasks");
  }

}
