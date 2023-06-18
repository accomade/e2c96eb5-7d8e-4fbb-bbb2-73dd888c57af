import type { I18n, Translation } from '$lib/types/i18n'

import { 
  formatMonthHeader,
} from './formats.js'

import translations from './translations.json'

const mappedTranslations:I18n = {
  defaultLang: translations.defaultLang,
  preferBrowserLang: translations.preferBrowserLang,
  translations: {}
}

for ( const tEntry of Object.entries(translations.translations)) {
  const [lang, jsonT] = tEntry;
  const t:Translation = {
    site: jsonT.site,
    cookies: jsonT.cookies,
    calendar: {
      weekdayLabels: {
        1: jsonT.calendar.weekdayLabels[0],
        2: jsonT.calendar.weekdayLabels[1],
        3: jsonT.calendar.weekdayLabels[2],
        4: jsonT.calendar.weekdayLabels[3],
        5: jsonT.calendar.weekdayLabels[4],
        6: jsonT.calendar.weekdayLabels[5],
        7: jsonT.calendar.weekdayLabels[6],
      },
      monthLabels: {
        1: jsonT.calendar.monthLabels[0],
        2: jsonT.calendar.monthLabels[1],
        3: jsonT.calendar.monthLabels[2],
        4: jsonT.calendar.monthLabels[3],
        5: jsonT.calendar.monthLabels[4],
        6: jsonT.calendar.monthLabels[5],
        7: jsonT.calendar.monthLabels[6],
        8: jsonT.calendar.monthLabels[7],
        9: jsonT.calendar.monthLabels[8],
        10: jsonT.calendar.monthLabels[9],
        11: jsonT.calendar.monthLabels[10],
        12: jsonT.calendar.monthLabels[11],
      },
      weekendLabel: jsonT.calendar.weekendLabel,
      typeNames: {
        defaultOccupationsTypeName: jsonT.calendar.typeNames.defaultOccupationsTypeName
      },
      monthHeaderFormatFun: (month:string, year:string) => {
        return formatMonthHeader(lang, month, year)
      },
    }
  }

  if(!mappedTranslations.translations) {
    mappedTranslations.translations = {}
  }
  mappedTranslations.translations[lang] = t
}

export const dictEntry = (lang:string, key:string|undefined):string|undefined => {
  let res = undefined;
  if(!key) return

  if(mappedTranslations.translations) {
    const t = mappedTranslations.translations[lang]
    if(t) {
      const dict = t.site
      if(dict) {
        res = dict[key]
        if (res) return res
      }
    }
  }
  return key
}

const i18n:I18n = mappedTranslations
export default i18n;