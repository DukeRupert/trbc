<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { urlFor } from '$lib/sanity/client';
	import type { OpenGraph, Image } from '$lib/sanity/types/page';

	// determines schema choice
	export let type = 'page';
	export let title = 'Fix me';
	export let mainImage: Image;
	export let metaDescription = 'The description should be here.';
	export let openGraph: OpenGraph;
	export let publishedAt = '2023-02-20T16:17:00.000Z';
	export let url = 'https://fireflysoftware.dev';
	export let noindex = false;
	export let width = 1200;
	export let height = 630;

	// console.log(type);
	// console.log(title);
	// console.log(mainImage);
	// console.log(metaDescription);
	// console.log(openGraph);
	// console.log(publishedAt);
	// console.log(url);
	// console.log(noindex);
	// console.log(width);
	// console.log(height);
</script>

<SvelteSeo {title} description={metaDescription} />
{#if type == 'page'}
	<SvelteSeo
		{title}
		description={metaDescription}
		openGraph={{
			title: openGraph?.ogTitle,
			description: openGraph?.ogDescription,
			url: url,
			type: 'website',
			images: [
				{
					url: urlFor(openGraph?.ogImage?.asset).width(width).height(height).format('webp').url(),
					width: width,
					height: height,
					alt: openGraph?.ogTitle
				}
			]
		}}
	/>
{:else if type == 'post'}
	<SvelteSeo
		{title}
		description={metaDescription}
		{noindex}
		openGraph={{
			title: title,
			description: metaDescription,
			url: url,
			type: 'article',
			article: {
				publishedTime: publishedAt
			},
			images: [
				{
					url: urlFor(mainImage?.asset).width(width).height(height).format('webp').url().toString(),
					width: width,
					height: height,
					alt: mainImage?.alt ?? title
				}
			]
		}}
	/>
{/if}
