<script lang="ts">
	import church_photo from '$lib/assets/IMG-1455.jpg?run';
	import Img from '@zerodevx/svelte-img';
	import FadeIn from '$lib/components/FadeIn.svelte';
</script>

<svelte:head>
	<title>Careers | The Ridge Bible Church</title>
	<meta
		name="description"
		content="The Ridge Bible Church is a great place to work. Learn more about the positions available and apply here."
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
		<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Job Openings</h1>
		<p class="mt-6 text-lg leading-8 text-gray-200">
			The Ridge Bible Church is a great place to work. See if there is a position for you.
		</p>
	</div>
</div>

<!-- Jobs -->
<div class="bg-gray-50 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Open Positions</h2>
		</div>
		<dl class="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
			<FadeIn>
				<div class="card bg-white shadow-md px-4 py-2">
					<header class="card-header">
						<span class="w-full flex justify-center">
							<svg
								class="h-24 w-24 text-primary-500"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" />
								<path
									d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"
								/> <line x1="13" y1="8" x2="15" y2="8" />
								<line x1="13" y1="12" x2="15" y2="12" /></svg
							>
						</span>
					</header>
					<section class="p-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						Senior Pastor
					</section>
					<footer class="card-footer text-base leading-7 text-gray-600">
						<p>We’re currently seeking a senior pastor. Interested?</p>
						<a href="/careers/senior-pastor" class="mt-8 btn variant-filled-primary"
							>Explore & Apply</a
						>
					</footer>
				</div>
			</FadeIn>
		</dl>
	</div>
</div>
