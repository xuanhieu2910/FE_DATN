import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../layout/header/header.component";
import {SideBarComponent} from "../layout/side-bar/side-bar.component";
import {PagesComponent} from "./pages.component";
import {PagesRoutingModule} from "./pages-routing.module";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";
import { ClassListComponent } from './class-list/class-list.component';
import {MessageService} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    PagesComponent,
    ClassListComponent,
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    MessageModule,
    ToastModule,
    ButtonModule,
    RippleModule
  ],
  providers: [
    MessageService
  ]
})
export class PagesModule { }
