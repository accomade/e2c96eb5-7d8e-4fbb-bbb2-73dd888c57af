import { writable } from "svelte/store";
import type { CookieSelection } from "$lib/types/cookies";

export const cookieSelection = writable<CookieSelection>({
  'analytics': false,
  'marketing': false,
  'preferences': false,
  'necessary': true,
})