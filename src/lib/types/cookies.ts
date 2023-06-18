import type { CookieType } from 'gdpr-cooco-banner'

export type CookieSettings = {
  types: CookieType[]
  showIcon: boolean
}

export type CookieSelection = {
  [key in CookieType]: boolean
}