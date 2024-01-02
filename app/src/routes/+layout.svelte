<script lang="ts">
	import type { LayoutServerData } from './$types';

	// Tailwind styles
	import '../app.postcss';
	
	// Skeleton Popup reqs
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import Toaster from '$lib/components/toast/Toaster.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	export let data: LayoutServerData;
	const { metaData } = data;

	const links = [
		{ label: 'Events', href: '/events' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'Why the Ridge', href: '/why-the-ridge' },
		{ label: 'Statement of Faith', href: '/statement-of-faith' },
		{ label: 'Contact Us', href: '/contact-us' }
	];
</script>

<Toaster />
<NavBar data={metaData} {links} />
<main class="isolate min-h-screen bg-surface-50 dark:bg-surface-900">
	<slot />
</main>
<Footer data={metaData} {links} />
