import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Task } from './task.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public taskSer:EmployeeService) { }
  data:Array<Task> = new Array();
  storeTask(taskRef:any){
    this.taskSer.storeTask(taskRef);
    this.get();
  }
  get(){
    this.taskSer.loadTask().subscribe(data=>this.data = data);
  }
  ngOnInit(): void {
  }
}
