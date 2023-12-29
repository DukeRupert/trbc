<script lang="ts">
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	import type { MetaData } from '$lib/sanity/types/SiteSettings';
	import type { Link } from '$lib/types/app';
	export let data: MetaData;
	export let links: Link[] = [];
	const { business_name, socials } = data;
</script>

<footer class="bg-white">
	<hr />
	<div class="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
		<nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
			{#each links as { href, label }}
				<div class="pb-6">
					<a
						{href}
						class="unstyled text-sm leading-6 text-gray-600 hover:text-primary-900 hover:underline underline-offset-2"
						>{label}</a
					>
				</div>
			{/each}
		</nav>
		{#if socials}
			<div class="mt-10">
				<SocialMedia data={socials} />
			</div>
		{/if}
		{#if business_name}
			<p class="mt-10 text-center text-xs leading-5 text-gray-500">
				&copy; 2018 {business_name}. All rights reserved.
			</p>
		{/if}
	</div>
</footer>
