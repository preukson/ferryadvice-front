import { authenticateUser } from '$lib/server/auth'
import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'

export const handle: Handle = async ({ event, resolve }) => {
	// Stage 1
	event.locals.user = authenticateUser(event)

	const response = await resolve(event) // stage 2

	//stage 3


	return response
	// const lang = event.request.headers.get('accept-language')?.split(',')[0]
	// const lang = event.url.pathname.match(/[^/]+?(?=\/|$)/)
	// $: console.log('okok')
	// if (lang) {
	// 	locale.set(lang)
	// }
	// const lang = event.request.headers.get('accept-language')?.split(',')[0];
	// let locale2 = event.url.pathname.match(/[^/]+?(?=\/|$)/);
	// let locale = locales.find((l) => ${l}.toLowerCase() === ${event.url.pathname.match(/[^/]+?(?=\/|$)/)}.toLowerCase());
	/*console.log(locale2)
	if (lang) {
		locale.set(lang)
	}*/
	// if (browser) {
		// let localePath = event.url.pathname.match(/[^/]+?(?=\/|$)/) ;
		// let useLocal
		// if(localePath?.[0]){
		// 	useLocal = localePath?.[0]
		// }else{
		// 	useLocal = window.navigator.language
		// }
	//  console.log(lang)
	// 	locale.set(useLocal)
	// }
	
	
}