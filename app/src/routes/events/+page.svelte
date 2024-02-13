<script lang="ts">
	import type { PageData } from './$types';
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	import PortableText from '$lib/components/portableText/index.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import ListView from '$lib/components/portableText/calendar/ListView.svelte';
	import { page } from '$app/stores';

	export let data: PageData;
	const { blocks, seo } = data?.page;
</script>

{#if seo}
	<Seo type="page" {...seo} url={$page.url.href} />
{/if}
<div class="bg-surface-50 dark:bg-surface-900 py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		{#if blocks}
			<PortableText data={blocks} />
			<ListView events={data.events} />
		{:else}
			<UnderConstruction />
		{/if}
	</div>
</div>
