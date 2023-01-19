<script>
 import { _ } from 'svelte-i18n'
</script>
<svelte:head>
	<title>{$_('aboutus.title', { default: 'About us' })}</title>
</svelte:head>

<div class="section full">
	<img src="/assets/img/content/aboutus.jpg" alt="image" class="w-100" style="border-top-right-radius: 1rem;">
</div>

<div class="section full mt-2">
	<h1 class="section-title">{$_('aboutus.title')}</h1>
	<div class="wide-block pt-2 pb-1">
		{@html $_('aboutus.description') }
	</div>
	<div class="wide-block pt-2 pb-1">
		<!-- TrustBox script -->
		<a href="https://www.trustpilot.com/review/ferryadvice.com" target="_blank" rel="noopener">
			<img src="/assets/img/content/trustpilot.jpg" alt="" class="img-fluid">
		</a>
		<a href="https://www.trustpilot.com/review/ferryadvice.com" target="_blank" class="d-block text-center text-secondary" rel="noopener">Trustpilot</a>
	</div>
</div>