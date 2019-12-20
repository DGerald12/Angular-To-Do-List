import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from "@angular/core";

import { Task } from '../../../../models/task';

@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit() 
  {
  
  }

}
