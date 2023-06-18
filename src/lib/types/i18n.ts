import type { I18n as CalI18n} from 'occuplan'
import type { Translation as CookieTrans } from 'gdpr-cooco-banner'

export interface Translation {
  site: {
    [key: string]: string 
  },
  calendar: CalI18n,
  cookies: CookieTrans,
}

export interface I18n { 
  defaultLang?: string,
  preferBrowserLang?: boolean,
  translations: {
    [key: string]: Translation
  } 
}