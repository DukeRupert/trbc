<script lang="ts">
	import PortableText from '$lib/components/portableText/index.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import Hero from '$lib/components/portableText/Hero.svelte';
	import type { Hero as HeroType } from '$lib/sanity/queries/page/types';
	import Dashboard from '$lib/components/Dashboard.svelte';

	export let data: PageData;
	$: ({ events, posts } = data);
	const blocks = data?.page?.blocks;

	const heroData = blocks.find((el) => el._type === 'hero') as HeroType;
</script>

<svelte:head
	><script
		defer
		data-domain="theridgebiblechurch.com"
		src="https://plausible.io/js/script.js"
	></script>
</svelte:head>

<Seo type="page" {...data?.page?.seo} url={$page.url.href} />
{#if heroData}
	<Hero data={heroData} />
{/if}
<div class="max-w-5xl mx-auto">
	<Dashboard {events} {posts} />
	<PortableText data={blocks} />
</div>
