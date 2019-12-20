import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { DisplayDetailsComponent } from './modules/details/display-details/display-details.component'

const routes: Routes = [
    {
        path: '',
        component: TasksComponent
    },
    {
      path: ':taskId',
      component: DisplayDetailsComponent
    },
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}