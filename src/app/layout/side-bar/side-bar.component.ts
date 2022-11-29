import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScriptService} from "../../services/script.service";
import {IsActiveMatchOptions, Router} from "@angular/router";
import {Constant} from "../../utils/constant";
import {Menu} from "../../models/menu.interface";
import {initAdminNav, rerunMenuJs} from "../../../assets/js/action";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, AfterViewInit {
  menuAdmin: Menu[] = Constant.MENU_ADMIN_V1

  RouteOption: IsActiveMatchOptions = {
    paths:"exact",
    matrixParams:"exact",
    queryParams:"exact",
    fragment:"exact",
  }

  constructor(
    private script: ScriptService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    rerunMenuJs()
    initAdminNav()
    this.script.loadSpecificScriptOnSpecificPage([
      '../../../../../assets/js/vertical-responsive-menu.min.js'], 'app-side-bar'
    )
  }

  isActive(){
    console.log( this.router.isActive(this.router.url, this.RouteOption))
    return this.router.isActive(this.router.url, this.RouteOption)
  }

}
