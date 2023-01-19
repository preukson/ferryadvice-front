import { browser } from '$app/environment'
import '$lib/i18n' // Import to initialize. Important :)
import { locale,locales, waitLocale } from 'svelte-i18n'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({ fetch }) => {
	
	// if (browser) {
	// 	let localePath = window.location.pathname.match(/[^/]+?(?=\/|$)/) ;
	// 	let useLocal
	// 	if(localePath?.[0]){
	// 		useLocal = localePath?.[0]
	// 	}else{
	// 		useLocal = window.navigator.language
	// 	}
	//  console.log(localePath?.[0])
	// 	locale.set(useLocal)
	// }
	await waitLocale()


	// const res = await fetch('/api/language')
	const res = await fetch('/config.json')
	const data = await res.json()

	return {
		configs: data
	}
}