<!-- Centered with background image -->
<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { PageHeader } from '$lib/sanity/queries/page/types';

	export let portableText: CustomBlockComponentProps<PageHeader>;
	const { value } = portableText;
</script>

<div class="mx-auto max-w-2xl">
	{#if value.eyebrow}
		<p class="text-base font-semibold leading-7 text-primary-600">{value.eyebrow}</p>
	{/if}
	<h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{value.title}</h2>
	{#if value.description}
		<p class="mt-6 text-lg leading-8 text-gray-600">
			{value.description}
		</p>
	{/if}
</div>
