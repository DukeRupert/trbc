<script lang="ts">
	import type { LayoutServerData } from './$types';
	// Tailwind styles
	import '../app.postcss';
	// Skeleton Popup reqs
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import Footer from '$lib/components/Footer.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	export let data: LayoutServerData;
	console.log(data);

	const links = [
		{ label: 'Events', href: '/events' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'Why the Ridge', href: '/why-the-ridge' },
		{ label: 'Statement of Faith', href: '/statement-of-faith' },
		{ label: 'Contact Us', href: '/contact-us' }
	];
</script>

<NavBar logo={data.metaData.logo} socials={data.metaData.socials} {links} />
<main class="isolate min-h-screen">
	<slot />
</main>
<Footer data={data.metaData} {links} />
