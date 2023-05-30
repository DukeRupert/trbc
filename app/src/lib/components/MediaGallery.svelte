<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { MediaGallery } from '$lib/sanity/types/mediaGallery';
	import SanityImage from './SanityImage.svelte';
	export let portableText: CustomBlockComponentProps<MediaGallery>;
	const { value } = portableText;
	console.log(value);
</script>

<div class="bg-white">
	<div class="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
		<h2 class="h2 font-bold tracking-tight">{value?.title ?? ''}</h2>
		<p class="mt-4">
			{value?.description ?? ''}
		</p>

		<div class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
			{#each value.gallery as item}
				<div class="group block">
					<div
						aria-hidden="true"
						class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5"
					>
						<SanityImage image={item.image} height="384" width="256" class="aspect-[3/2] w-full rounded-2xl object-cover"/>
					</div>
					<h3 class="mt-4 text-base font-semibold text-gray-900">{item?.title ?? ''}</h3>
					<p class="mt-2 text-sm text-gray-500">
						{item?.description ?? ''}
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>
