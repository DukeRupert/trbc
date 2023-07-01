<script lang="ts">
	import OurFamily from '$lib/components/OurFamily.svelte';
	import type { PageData } from './$types';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import Team from '$lib/components/Team.svelte';
	import Reviews from '$lib/components/Reviews/index.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Cta from '$lib/components/cta/SimpleCenteredOnBrand.svelte';
	import Posts from '$lib/components/Posts/Posts.svelte';
	import { PortableText } from '@portabletext/svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { page } from '$app/stores';
	import Services from '$lib/components/Services.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';

	export let data: PageData;
	console.log(data);
	const blocks = data?.page?.blocks as InputValue;
</script>

<Seo type="page" {...data?.page?.seo} url={$page.url.href} />
<PortableText
	value={blocks}
	components={{
		types: {
			hero: Hero,
			features: Features,
			team: Team,
			reviews: Reviews,
			pageHeader: PageHeader,
			posts: Posts,
			cta: Cta,
			gallery: OurFamily
		}
	}}
/>
<ContactForm />
