<script lang="ts">
	import church_photo from '$lib/assets/IMG-1455.jpg?run';
	import Img from '@zerodevx/svelte-img';
	import FadeIn from '$lib/components/FadeIn.svelte';
</script>

<svelte:head>
	<title>Sermons | The Ridge Bible Church</title>
	<meta
		name="description"
		content="The Ridge Bible Church makes past sermons available to the public. We hope you find the following teaching encouraging and useful."
	/>
</svelte:head>

<!-- Section Header -->
<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
	<Img
		src={church_photo}
		alt="The front view of The Ridge Bible Church"
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<div class="mx-auto max-w-2xl p-2 text-center bg-gray-900/60 rounded-lg">
		<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sermons</h1>
		<p class="mt-6 text-lg leading-8 text-gray-200">
			We hope you find the following teaching encouraging and useful.
		</p>
	</div>
</div>
<div class="text-center p-2 lg:px-8 py-16 lg:py-32">
	<h2 class="h2">Under construction...</h2>
	<p>Please check back again soon.</p>
</div>
