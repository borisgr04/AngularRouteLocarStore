import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor() { }

  add(task:Task){

    let tasks:Task[]=[];
    if(localStorage.getItem('task')!=null)
    {
      tasks=JSON.parse(localStorage.getItem('task'));
    }
    tasks.push(task);
    localStorage.setItem('task', JSON.stringify(tasks) );
    
  }

  getAll():Task[]{
      return JSON.parse(localStorage.getItem('task'));
  }
}
