<script>
import { _ } from 'svelte-i18n'

import Footer from './layouts/Footer.svelte';
import Header from './layouts/Header.svelte';
import Sidebar from './layouts/Sidebar.svelte';
import './styles.css';

export let data

</script>

<div class="app">
	<Header />
		

	<main id="appCapsule">
		<slot />
	</main>
	
	<Sidebar configData={data}/>
	<footer>
		<Footer />
	</footer> 
</div>

<style lang=scss>
	
</style>
