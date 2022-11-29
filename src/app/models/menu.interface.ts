export interface Menu {
  path: string
  title: string
  icon: string
  class: string
  menuCode: string
  hasChild?: boolean
  childMenu?: Menu[]
  menuTypeCode?: string
}

export interface EventInfoMenu extends Menu{
  badges?: number
}
