<script>
import { _ ,waitLocale,isLoading } from 'svelte-i18n'
import { storeLayout } from '$lib/stores/layout'

import Footer from './layouts/Footer.svelte';
import Header from './layouts/Header.svelte';
import Sidebar from './layouts/Sidebar.svelte';

export let data


</script>

<div class="app">
	{#if $isLoading}
	Please wait...
	{:else}
	<Header />
		

	<main id="appCapsule">
		<slot />
	</main>
	
	<Sidebar configData={data}/>
	<footer class:d-none={$storeLayout.hideFooter}>
		<Footer />
	</footer> 
	{/if}
</div>

<style lang=scss>
	
</style>
