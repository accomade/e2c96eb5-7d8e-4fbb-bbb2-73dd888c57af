export interface NavItem {
  key: string,
  path?: string,
  external?: boolean,
  sub?: boolean,
}


export interface Nav {
  main: NavItem[]
  footer: NavItem[]
} 