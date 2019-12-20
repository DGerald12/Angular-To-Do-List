import { Injectable } from '@angular/core';

import { Task } from '../models/task';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = 
  [
    { 
      id: 1,
      label: 'Cook Dinner', 
      done: false, 
      priority: 3
    }, 
    {
      id: 2,
      label: 'Falls Park Dental Appointment',
      done: true,
      priority: 2
    },
    {
      id: 3,
      label: 'Family Movie Night',
      done: false,
      priority: 3
    },
    {
      id: 4,
      label: 'Caribbean Cruise With Wife',
      done: true,
      priority: 1
    }
  ];

  getTasks = (): Observable<Task[]> =>
  {
    return of(this.tasks);
  }
}
