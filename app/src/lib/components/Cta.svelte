<!-- Simple centered on brand -->
<script lang="ts">
	export let data = {
		heading: 'Come Join Us Today!',
		body: 'If you are seeking God and a family in Graham, WA we want to meet you.',
		primaryAction: {
			label: 'Directions',
			url: 'https://goo.gl/maps/emxC4AsyHuxdWybD8'
		},
		secondaryAction: {
			label: 'Contact us',
			url: '/#contact-us'
		}
	};
</script>

<div class="relative isolate overflow-hidden bg-gray-900">
	<div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				{data?.heading}
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
				{data?.body}
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a href={data?.primaryAction?.url} class="btn variant-filled-secondary"
					>{data?.primaryAction?.label}</a
				>

				<a href={data?.secondaryAction?.url} class="btn variant-ghost-secondary text-white"
					>{data?.secondaryAction?.label} <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div>
	<svg
		viewBox="0 0 1024 1024"
		class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
		aria-hidden="true"
	>
		<circle
			cx="512"
			cy="512"
			r="512"
			fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
			fill-opacity="0.7"
		/>
		<defs>
			<radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
				<stop stop-color="#b60100" />
				<stop offset="1" stop-color="#a40100" />
			</radialGradient>
		</defs>
	</svg>
</div>
