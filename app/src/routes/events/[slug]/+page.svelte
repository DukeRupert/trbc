<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';
	import SanityImage from '$lib/sanity/SanityImage/Image.svelte';
    import PortableText from '$lib/components/portableText/index.svelte'

	export let data: PageData;
	const { event } = data;
    console.log(event)
</script>

<div class="bg-surface-50 dark:bg-surface-900 px-6 py-32 lg:px-8">
	<div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
		<p class="text-base font-semibold leading-7 text-primary-600">{formatDate(event.date)}</p>
		<h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{event.title}</h1>
		<SanityImage
			image={event.coverImage}
			maxWidth={1920}
			cls="w-full mt-16 aspect-video rounded-xl bg-gray-50 object-cover"
		/>
		<div class="mt-10 max-w-2xl">
			<PortableText data={event.content} />
		</div>
	</div>
</div>
