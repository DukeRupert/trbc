<script lang="ts">
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	import type { Business, SocialMedia as SocialMediaData } from '$lib/sanity/types/siteMetaData';
	export let business: Business;
	export let socialMedia: SocialMediaData;
</script>

<footer class="bg-white">
	<hr />
	<div class="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
		<nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
			<div class="pb-6">
				<a
					href="/#services"
					class="unstyled text-sm leading-6 text-gray-600 hover:text-primary-900 hover:underline underline-offset-2"
					>Services</a
				>
			</div>

			<div class="pb-6">
				<a
					href="/#about"
					class="unstyled text-sm leading-6 text-gray-600 hover:text-gray-900 hover:underline underline-offset-2"
					>About</a
				>
			</div>

			<div class="pb-6">
				<a
					href="/blog"
					class="unstyled text-sm leading-6 text-gray-600 hover:text-gray-900 hover:underline underline-offset-2"
					>Blog</a
				>
			</div>

			<div class="pb-6">
				<a
					href="#"
					class="unstyled text-sm leading-6 text-gray-600 hover:text-gray-900 hover:underline underline-offset-2"
					>Privacy Policy</a
				>
			</div>
		</nav>
		{#if socialMedia}
			<div class="mt-10">
				<SocialMedia {socialMedia} />
			</div>
		{/if}
		{#if business?.business_name}
			<p class="mt-10 text-center text-xs leading-5 text-gray-500">
				&copy; 2018 {business?.business_name}. All rights reserved.
			</p>
		{/if}
	</div>
</footer>
