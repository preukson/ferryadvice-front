import { writable } from "svelte/store"

export const storeLayout = writable({
        hideHeader: 0,
        hideFooter: 0
    })
