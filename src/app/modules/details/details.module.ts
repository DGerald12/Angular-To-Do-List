import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DisplayDetailsComponent } from './display-details/display-details.component';
import { DisplayDetailComponent } from './components/display-detail/display-detail.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [DisplayDetailsComponent, DisplayDetailComponent],
  exports: [DisplayDetailsComponent]
})
export class DetailsModule { }
