import { browser } from '$app/environment'
import { init, register,locale,waitLocale,getLocaleFromPathname } from 'svelte-i18n'

const defaultLocale = 'en'

register('en', () => import('./locales/en.json'))
register('th', () => import('./locales/th.json'))

const defaultLanguage = browser ? window.navigator.language : defaultLocale;
const pathLocale = getLocaleFromPathname(/^\/(.*?)\//);
const initLocal = pathLocale? pathLocale: defaultLanguage;
init({
	fallbackLocale: defaultLocale,
	initialLocale: initLocal
})

export async function preload() {
    // awaits for 'en' loaders
    return waitLocale()
  }