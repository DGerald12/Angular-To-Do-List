import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

import { AppRoutingModule } from './app-routing.module';

import { DetailsModule } from './modules/details/details.module';


@NgModule({
  declarations: [AppComponent, TasksComponent],
  imports: [BrowserModule, AppRoutingModule, DetailsModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
