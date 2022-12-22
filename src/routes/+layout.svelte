<script lang="ts">
	import { _ } from 'svelte-i18n'

	import Footer from './layouts/Footer.svelte';
	import Header from './layouts/Header.svelte';
	import Sidebar from './layouts/Sidebar.svelte';
	import './styles.css';
	
</script>

<div class="app">
	<Header />
{$_('home.title')}
	<main id="appCapsule">
		<slot />
	</main>
	<Sidebar />
	<footer>
		<Footer />
	</footer>
</div>

<style lang=scss>
	
</style>
