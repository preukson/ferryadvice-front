<script>
 import { _ } from 'svelte-i18n'
</script>
<svelte:head>
	<title>{$_('reviews_details.title', { default: 'Reviews' })}</title>
</svelte:head>

<div class="section full">
	<div class="border-top fs-5">
		<nav aria-label="breadcrumb">
			<ul class="breadcrumb">
			  <li class="breadcrumb-item"><a href="/">{$_('breadcrumb.home')}</a></li>
			  <li class="breadcrumb-item"><a href="/reviews">{$_('breadcrumb.reviews')}</a></li>
			  <li class="breadcrumb-item active" aria-current="page">Pagename</li>
			</ul>
		</nav>
	</div>
</div>
<div class="section full">
	<img src="/assets/img/content/aboutus.jpg" alt="image" class="w-100" style="border-top-right-radius: 1rem;">
</div>

<div class="section mt-2">
	<div class="blog-post">
		<h1 class="title">How to take Landscape Photos in 10 Easy Ways</h1>

		
		<div class="post-body">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at magna porttitor lorem mollis
				ornare. Fusce varius varius massa. Vivamus nec odio tempus, condimentum ex eget, varius diam.
			</p>
			<p>
				Ut id fermentum nisi. In hac habitasse platea dictumst. Praesent ornare eget neque ut cursus. Nunc
				efficitur laoreet vulputate. Curabitur mi ligula, aliquet commodo leo in, consectetur venenatis
				tellus. Maecenas quis vehicula erat, vitae finibus tellus.
			</p>
			<p>
				Cras rhoncus ipsum quis lacus aliquam, quis euismod ligula varius. Phasellus ac odio rhoncus,
				aliquet nisl lobortis, commodo orci. Quisque bibendum est ut pellentesque hendrerit.
			</p>
			<img src="assets/img/sample/photo/wide2.jpg" alt="image">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at magna porttitor lorem mollis
				ornare. Fusce varius varius massa. Vivamus nec odio tempus, condimentum ex eget, varius diam.
			</p>
			<h2>Heading</h2>
			<p>
				Ut id fermentum nisi. In hac habitasse platea dictumst. Praesent ornare eget neque ut cursus. Nunc
				efficitur laoreet vulputate. Curabitur mi ligula, aliquet commodo leo in, consectetur venenatis
				tellus. Maecenas quis vehicula erat, vitae finibus tellus.
			</p>
			<h4>Subtitle</h4>
			<p>
				Cras rhoncus ipsum quis lacus aliquam, quis euismod ligula varius. Phasellus ac odio rhoncus,
				aliquet nisl lobortis, commodo orci. Quisque bibendum est ut pellentesque hendrerit.
			</p>
			<h4>Subtitle</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at magna porttitor lorem mollis
				ornare. Fusce varius varius massa. Vivamus nec odio tempus, condimentum ex eget, varius diam.
			</p>
		</div>
	</div>


	<div class="section mt-4">
		<button type="button" class="btn btn-outline-primary btn-block" data-bs-toggle="offcanvas"
			data-bs-target="#actionSheetShare">
			<ion-icon name="share-outline"></ion-icon>
			Share This Post
		</button>
	</div>

	<div class="divider mt-4 mb-3"></div>
</div>