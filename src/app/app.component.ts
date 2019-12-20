import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'To Do List';
  description = 'This is a thorough To-Do List App.  Several tasks will be created; in which when clicked upon they will give a detailed descripton of the task such as time to complete and the necessary tools needed to complete the task.';
  warning = 'Warning! This is NOT a test! Repeat, this is NOT A TEST!'
}
