import { Menu } from "../models/menu.interface"

export class Constant{
  public static startCode = "11/29/2022"

  public static MENU_ADMIN_V1: Menu[] = [
    {path: '/dashboard', title: 'Tổng quan', icon: 'bi bi-speedometer', class: '', menuCode: 'DASHBOARD', hasChild: false},
    {
      path: '/class-list', title: 'Lớp học', icon: 'bi bi-journal-plus', class: '', menuCode: '', hasChild: true,
      childMenu: [
        {path: '/my-admin/events/all', title: 'Danh sách lớp học', icon: '', class: '', menuCode: 'EVENTS'},
      ]
    },
    {
      path: '/class-list', title: 'Kiểm tra', icon: 'bi bi-journal-plus', class: '', menuCode: '', hasChild: false
    },
    ]
}

