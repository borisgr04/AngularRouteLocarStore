import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskDataService } from '../services/task-data.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  task:Task;

  constructor(private taskDataService:TaskDataService) { }

  ngOnInit() {
    this.task={title:'', description:'', priority:false}
    console.log('se inicializa el objeto task');
  }
  add(): void {

    this.taskDataService.add(this.task);
    alert('Se agregó una nueva tarea');
  }
  
}
