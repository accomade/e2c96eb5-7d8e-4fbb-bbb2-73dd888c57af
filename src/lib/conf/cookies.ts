import type { CookieSettings } from '$lib/types/cookies'
import type { CookieType } from 'gdpr-cooco-banner'

import cookiesJson from './cookies.json'

const cookieSettings:CookieSettings = {
  showIcon: cookiesJson.showIcon,
  types: cookiesJson.types as CookieType[],
}

export default cookieSettings