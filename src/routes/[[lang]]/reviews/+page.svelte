<script>
	import { _ } from 'svelte-i18n'
   </script>
   <svelte:head>
	   <title>{$_('reviews.title', { default: 'Reviews' })}</title>
   </svelte:head>
   
   <div class="section full">
	   <div class="border-top border-bottom fs-5">
		   <nav aria-label="breadcrumb">
			   <ul class="breadcrumb">
				 <li class="breadcrumb-item"><a href="/">{$_('breadcrumb.home')}</a></li>
				 <li class="breadcrumb-item active" aria-current="page">{$_('breadcrumb.reviews')}</li>
			   </ul>
		   </nav>
	   </div>
   </div>
   
   <div class="section mt-2">
		<h1 class="title">Reviews & Travel Blog</h1>
		
   </div>
   <div class="section mt-2">
		<div class="box_review">
			<a href="">
				<img src="https://via.placeholder.com/500x600" class="d-block rounded w-100" alt="...">
				<h4>10 Simple Practices That Will Help You Get 1% Better Every Day</h4>
			</a>
		</div>
   </div>