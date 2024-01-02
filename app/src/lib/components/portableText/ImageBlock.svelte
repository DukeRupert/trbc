<script lang="ts">
	import SanityImage from '$lib/sanity/SanityImage/Image.svelte';
	import type { SanityImage as Image } from '$lib/sanity/SanityImage/types';

	export let portableText;

	const value = portableText?.value as Image;
</script>

{#if value.asset}
	<SanityImage
		image={value}
		maxWidth={1920}
		cls="w-full mt-16 aspect-video rounded-xl bg-gray-50 object-cover"
	/>
{/if}
