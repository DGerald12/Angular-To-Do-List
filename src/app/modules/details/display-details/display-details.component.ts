import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit 
{
  private detailsRoute = 'http://localhost:3000/task';
  public details: Task[];

  constructor(private http: HttpClient) { }

  getDetails()
  {
    this.http.get<Task[]>(this.detailsRoute).subscribe(details => {
      this.details = details;
      console.log('Details', this.details);
    });
  }

  ngOnInit() 
  {
    this.getDetails
  }

}
