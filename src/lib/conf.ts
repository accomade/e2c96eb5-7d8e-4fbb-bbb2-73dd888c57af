import I18n from './conf/translations';
import Nav from './conf/nav';
import Landing from './conf/landing';
import CookieSettings from './conf/cookies';
import Accos from './conf/accos';

import './conf/formats';

import type { Acco } from './types/accos';


export const i18n = I18n;
export const nav = Nav;
export const landing = Landing;
export const cookieSettings = CookieSettings;
export const accos = Accos as Acco[];