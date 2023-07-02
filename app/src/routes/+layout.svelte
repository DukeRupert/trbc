<script lang="ts">
	import type { LayoutServerData } from './$types';
	// Your custom Skeleton theme:
	import '../theme.postcss';
	// Your selected Skeleton theme:
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	// Skeleton Popup requirements
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { Toast } from '@skeletonlabs/skeleton';

	import Header from '$lib/components/Nav/Header.svelte';
	import Drawer from '$lib/components/Nav/Drawer.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data: LayoutServerData;
</script>

<Toast />
<div class="parent" id="foundation">
	<header>
		<Header logo={data?.siteMetaData?.logo?.asset} />
	</header>
	<main>
		<slot />
	</main>
	<div class="right-side">
		<Drawer />
	</div>
	<footer>
		<Footer
			business={data?.siteMetaData?.business}
			socialMedia={data?.siteMetaData?.socialMedia}
			logo={data?.siteMetaData?.logo}
		/>
	</footer>
</div>

<style>
	.parent {
		display: grid;
		grid-template: auto 1fr auto / auto 1fr auto;
	}

	header {
		grid-column: 1 / 4;
	}

	.left-side {
		grid-column: 1 / 2;
	}

	main {
		grid-column: 2 / 3;
	}

	.right-side {
		grid-column: 3 / 4;
	}

	footer {
		grid-column: 1 / 4;
	}
</style>
