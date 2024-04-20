<script>
	import sphere from '$lib/assets/sphere.svg';
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
	<div class="max-w-2xl mx-auto flex flex-col items-center justify-center">
		<header>
			<h1 class="font-damion text-9xl mt-20 text-white tracking-tighter">the aging sphere</h1>
		</header>
        <!-- TODO: replace static image with a swiftxr embed -->
		<div class="swiftxr-panel mt-24">
			<img src={sphere} alt="the aging sphere" />
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
</style>
