import { browser } from '$app/environment'
import { init, register,locale,waitLocale,getLocaleFromPathname ,getLocaleFromQueryString} from 'svelte-i18n'

const defaultLocale = 'en'

register('en', () => import('./locales/en.json'))
register('th', () => import('./locales/th.json'))
register('cn', () => import('./locales/cn.json'))
register('de', () => import('./locales/de.json'))
register('es', () => import('./locales/es.json'))
register('fr', () => import('./locales/fr.json'))
register('hr', () => import('./locales/hr.json'))
register('in', () => import('./locales/in.json'))
register('it', () => import('./locales/it.json'))
register('ja', () => import('./locales/ja.json'))
register('km', () => import('./locales/km.json'))
register('ko', () => import('./locales/ko.json'))
register('ms', () => import('./locales/ms.json'))
register('nl', () => import('./locales/nl.json'))
register('pt', () => import('./locales/pt.json'))
register('ru', () => import('./locales/ru.json'))
register('sv', () => import('./locales/sv.json'))
register('uk', () => import('./locales/uk.json'))
register('vi', () => import('./locales/vi.json'))

const defaultLanguage = browser ? window.navigator.language : defaultLocale;
// const pathLocale = getLocaleFromPathname(/^\/(.*?)\//);
const pathLocale = getLocaleFromPathname(/[^/]+?(?=\/|$)/);

// console.log(pathLocale)
// if(localePath?.[0]){
// 	const useLocal:any = localePath?.[0]
// 	console.log(useLocal)
// }else{
// 	const useLocal:any  = window.navigator.language
// 	console.log(useLocal)
// }


// const initLocal = pathLocale ? pathLocale: defaultLanguage;
init({
	fallbackLocale: defaultLocale,
	initialLocale: getLocaleFromPathname(/^\/(.*?)\//),
})
