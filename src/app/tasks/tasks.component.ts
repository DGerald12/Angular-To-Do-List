import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

import { TasksService } from '../services/tasks.service';
//import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit 
{
  tasks: Task[];
  dataService: TasksService;
    
  addTask(newTaskLabel) 
  {
    var newTask = 
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      label: newTaskLabel,
      priority: 3,
      done: false
    };
    this.tasks.push(newTask);
  }

  deleteTask(task) 
  {
    this.tasks = this.tasks.filter( t => t.label !== task.label );
  }

  constructor(private tasksService: TasksService) 
  { 
    this.dataService = this.tasksService;
  }

  ngOnInit(): void
  {
    this.dataService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

}
