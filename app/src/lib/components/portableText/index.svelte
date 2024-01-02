<script lang="ts">
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import OurFamily from '$lib/components/portableText/MediaGallery.svelte';
	import Hero from '$lib/components/portableText/Hero.svelte';
	import Features from '$lib/components/portableText/Features.svelte';
	import Team from '$lib/components/portableText/Team.svelte';
	import Reviews from '$lib/components/portableText/Reviews/index.svelte';
	import PageHeader from '$lib/components/portableText/PageHeader.svelte';
	import Cta from '$lib/components/portableText/cta/SimpleCenteredOnBrand.svelte';
	import Posts from '$lib/components/portableText/Posts/Posts.svelte';
	import ContentBlock from './ContentBlock.svelte';
	import Link from './Link.svelte';
	import ImageBlock from './ImageBlock.svelte';
	import Code from './Code.svelte';
	import { PortableText } from '@portabletext/svelte';
	import type { Block } from '$lib/sanity/queries/page/types';

	export let data: Block[] = [];
	const filteredData = data.filter((el) => el._type !== 'hero') as InputValue;
</script>

<PortableText
	value={filteredData}
	components={{
		types: {
			// block-level components
			hero: Hero,
			features: Features,
			team: Team,
			reviews: Reviews,
			pageHeader: PageHeader,
			posts: Posts,
			cta: Cta,
			gallery: OurFamily,
			contentBlock: ContentBlock,
			// inline-level components
			link: Link,
			image: ImageBlock,
			code: Code
		}
	}}
/>
