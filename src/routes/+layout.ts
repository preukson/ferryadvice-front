import { browser } from '$app/environment'
import '$lib/i18n' // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({ fetch }) => {
	if (browser) {
		locale.set(window.navigator.language)
	}
	await waitLocale()


	// const res = await fetch('/api/language')
	const res = await fetch('/config.json')
	const data = await res.json()

	return {
		configs: data
	}
}