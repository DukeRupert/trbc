<script lang="ts">
	import type { LayoutServerData } from './$types';
	import { initializeStores } from '@skeletonlabs/skeleton';

	// Tailwind styles
	import '../app.postcss';
	// Skeleton Toast reqs
	initializeStores();
	// Skeleton Popup reqs
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { Toast } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	export let data: LayoutServerData;
	console.log(data);
</script>

<Toast />
<NavBar logo={data.metaData.logo} socials={data.metaData.socials} />
<main class="isolate">
	<slot />
</main>
<footer>
	<!-- <Footer
			business={data?.siteMetaData?.business}
			socialMedia={data?.siteMetaData?.socialMedia}
			logo={data?.siteMetaData?.logo}
		/> -->
</footer>
