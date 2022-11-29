import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassListComponent} from "./class-list/class-list.component";

const routes: Routes = [
  {
    path: '',
    component: ClassListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
