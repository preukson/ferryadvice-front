<script>
import { _ } from 'svelte-i18n'
import { page } from '$app/stores'
import './styles.css';

$: console.log($page) //ถ้าจะ Track ตัวแปร ต้องอยู่ภายใต้ $:

</script>

<svelte:head>
	<title>{$_('search.title', { default: 'Search' })}</title>
	<meta name="description" content="{$_('search.description', { default: 'Search' })}">
	<meta name="keywords" content="{$_('search.keyword', { default: 'Search' })}" />
	<!-- Splide -->
</svelte:head>

<section>
	<div id="searchInformation">
		<div id="searchFormSummaryBox" class="px-2">
			<div class="row align-items-center lh-1">
				<div class="col text-end"><strong>Bangkok</strong><div class="mt-1 searchNameLabel">(Khaosan Boonsiri)</div></div>
				<div class="col-1">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
					</svg>
				</div>
				<div class="col"><strong>Koh Kood</strong><div class="mt-1 searchNameLabel">(Any Destination)</div></div>
				
			</div>
			<div class="row">
				<div class="col text-center searchDetailWrapper">Tue, 17 Jan ∙ 1 pax ∙ Economy 
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
						<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
					</svg>
				</div>
			</div>
		</div>
	</div>
	<div id="seletedTrip"></div>
	<div id="result" class="px-1">
		<div class="tripCard shadow-sm p-1 mb-5 bg-body rounded">
			
		</div>
	</div>
	<div id="filter"></div>
</section>

<style lang=scss>
#searchFormSummaryBox{
	background: #11b5e7;
    color: #fff;
    padding-top: 5px;
}
.searchNameLabel{
	font-size: 0.675rem
}
.searchDetailWrapper{
	font-size: 0.675rem
}
</style>
