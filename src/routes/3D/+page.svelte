<script>
	import sphere from '$lib/assets/sphere.svg';
	let swiftxr = {
		projectName: 'SwiftXR Svelte yt',
		projectUrl: 'https://tested-event.swiftxr.app'
	};
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Damion&family=Inconsolata:wght@200..900&family=Inter:wght@100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main>
	<div class="md:max-w-2xl w-full px-2 mx-auto flex flex-col items-center justify-center">
		<header>
			<h1 class="font-damion lg:text-8xl text-6xl mt-20 text-white text-center tracking-tighter">
				the aging sphere
			</h1>
		</header>
		<!-- TODO: replace static image with a swiftxr embed -->
		<div class="swiftxr-panel mt-24 h-96">
			<!-- <img src={sphere} alt="the aging sphere" /> -->
			<iframe
				title={swiftxr.projectName}
				frameborder="0"
				allowfullscreen
				mozallowfullscreen="true"
				webkitallowfullscreen="true"
				allow="fullscreen; autoplay; xr-spatial-tracking; camera; midi; encrypted-media;"
				execution-while-out-of-viewport
				execution-while-not-rendered
				web-share
				src={swiftxr.projectUrl}
			>
			</iframe>
		</div>
		<!-- TODO: replace static image with a swiftxr embed -->
		<div class="panel-desc mt-10 flex flex-col items-center justify-center gap-9">
			<p class="font-inter text-sm w-3/4 text-justify text-[#E2EAFE] tracking-tight">
				It’s a collection of three vignettes all about people’s connections to music. It all came
				from the idea that when artists create music and put it out in the world it means all these
				things to them.
			</p>
			<p class="font-inter text-sm w-3/4 text-justify text-[#E2EAFE] tracking-tight">
				For me, there’s a thing about music becoming autobiographical in terms of the audience’s
				perception. Someone could have made a song about their girlfriend leaving them or their
				husband being awful to them.
			</p>
		</div>
		<footer class="mt-16">
			<p class="font-inter text-sm text-center text-[#E2EAFE] tracking-tight space-x-4 uppercase">
				<span><a href="http://x.com/kohawithstuff">koha</a></span>
				<span>for</span>
				<span>earth</span>
				<span>and</span>
				<span>pluto</span>
			</p>
			<p class="font-inter text-sm text-center text-[#3d67cf] tracking-tight uppercase mt-4">
				<a href="/"
					>NO 3D
					<span class="inline-block align-bottom h-4 w-4"
						><svg width="12" height="12" viewBox="0 0 24 24"
							><path fill="#3d67cf" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" /></svg
						></span
					>
				</a>
			</p>
		</footer>
	</div>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme('colors.electric-blue.default');
	}

	.panel-desc {
		text-align-last: center;
	}

	iframe {
		width: 100%;
		height: 100%;
	}
</style>
