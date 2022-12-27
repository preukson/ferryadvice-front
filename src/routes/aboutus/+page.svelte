<script>
 import { _ } from 'svelte-i18n'
</script>
<svelte:head>
	<title>{$_('page.aboutus.title', { default: 'About us' })}</title>
</svelte:head>

<div class="section full">
	<img src="assets/img/sample/photo/wide4.jpg" alt="image" class="imaged square w-100">
</div>

<div class="section full mt-2">
	<div class="section-title">{$_('page.aboutus.title', { default: 'About us' })}</div>
	<div class="wide-block pt-2 pb-1">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at magna porttitor lorem mollis
			ornare. Fusce varius varius massa. Vivamus nec odio tempus, condimentum ex eget, varius diam.

		</p>
		<p>
			Nunc efficitur laoreet vulputate. Curabitur mi ligula, aliquet commodo leo in, consectetur venenatis
			tellus. Maecenas quis vehicula erat, vitae finibus tellus. Cras rhoncus ipsum quis lacus aliquam,
			quis
			euismod ligula varius. Phasellus ac odio rhoncus, aliquet nisl lobortis, commodo orci. Quisque
			bibendum
			est ut pellentesque hendrerit.
		</p>
	</div>
</div>