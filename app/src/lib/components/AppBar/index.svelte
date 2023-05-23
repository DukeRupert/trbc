<script lang="ts">
	import type { SanityAsset } from '@sanity/image-url/lib/types/types';
	import type { SocialMedia } from '$lib/sanity/types/siteMetaData';
	import { isMobileMenuOpen } from '$lib/SiteState';
	import { urlFor } from '$lib/sanity/client';
	import { page } from '$app/stores';
	import MobileMenu from './MobileMenu.svelte';
	// import { createEventDispatcher } from 'svelte';
	// import Flyout from './flyout.svelte';
	// import BurgerMenuButton from './BurgerMenuButton.svelte';

	export let logo: SanityAsset;
	export let socialMedia: SocialMedia;

	function toggleMobileMenu() {
		console.log('Toggle Mobile Menu');
		$isMobileMenuOpen = !$isMobileMenuOpen;
	}

	// for flyout menu
	// export let isServicesOpen = false;
	// const dispatch = createEventDispatcher();
	// function toggleServices() {
	// 	dispatch('toggleServices', {});
	// 	console.log('Toggle isOpen');
	// }
</script>

<div class="relative bg-white">
	<div class="flex items-center justify-between p-6 md:justify-start md:space-x-10">
		<div class="flex justify-start lg:w-0 lg:flex-1">
			<!-- {#if $page?.route?.id !== '/(website)'} -->
			<a href="/">
				<span class="sr-only">Your Company</span>
				<img
					class="h-8 w-auto sm:h-10"
					src={urlFor(logo?.asset).height(80).format('webp').url()}
					alt="Your Company"
				/>
			</a>
			<!-- {/if} -->
		</div>
		<div class="-my-2 -mr-2 md:hidden">
			<button
				type="button"
				on:click={toggleMobileMenu}
				class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
				aria-expanded="false"
			>
				<span class="sr-only">Open menu</span>
				<!-- Heroicon name: outline/bars-3 -->
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<nav class="hidden space-x-10 md:flex">
			<div class="relative">
				<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
				<!-- <button
					type="button"
					on:click|stopPropagation={toggleServices}
					class="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					aria-expanded="false"
				>
					<span>Services</span>
				
					<svg
						class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
				</button> -->

				<!-- Services Flyout -->
				<!-- <Flyout {isServicesOpen} /> -->
			</div>
			<a href="/#services" class="unstyled text-base font-medium text-gray-500 hover:text-gray-900"
				>Services</a
			>
			<a href="/blog" class="unstyled text-base font-medium text-gray-500 hover:text-gray-900"
				>Blog</a
			>
			<a href="/#about" class="unstyled text-base font-medium text-gray-500 hover:text-gray-900"
				>About</a
			>
		</nav>
		<div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
			<a href="#" class="btn variant-ringed-secondary">Sign in</a>
			<a href="#" class="ml-8 inline-flex btn variant-filled-secondary">Sign up</a>
		</div>
	</div>

	<!-- MobileMenu -->
	<MobileMenu {logo} {socialMedia} />
</div>
