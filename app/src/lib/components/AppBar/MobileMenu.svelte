<script lang="ts">
	import { isMobileMenuOpen } from '$lib/SiteState';
	import type { SanityAsset } from '@sanity/image-url/lib/types/types';
	import type { SocialMedia as SocialMediaData } from '$lib/sanity/types/siteMetaData';
	import { urlFor } from '$lib/sanity/client';
	import SocialMedia from '$lib/components/SocialMedia.svelte';

	export let logo: SanityAsset;
	export let socialMedia: SocialMediaData;

	function closeMobileMenu() {
		$isMobileMenuOpen = false;
	}
</script>

<div
	class="absolute z-20 inset-x-0 top-0 origin-top-right transform p-2 transition {$isMobileMenuOpen
		? 'duration-300 ease-out-expo translate-x-0'
		: 'duration-200 ease-in-expo translate-x-full'} md:hidden"
>
	<div
		class="divide-y-2 divide-surface-50 rounded-lg bg-surface-50 shadow-lg ring-1 ring-black ring-opacity-5"
	>
		<div class="px-5 pt-5 pb-6">
			<div class="flex items-center justify-between">
				<div>
					<img
						class="h-8 w-auto"
						src={urlFor(logo?.asset).height(40).format('webp').url()}
						alt="Your Company"
					/>
				</div>
				<div class="-mr-2">
					<button
						type="button"
						on:click={() => ($isMobileMenuOpen = !$isMobileMenuOpen)}
						class="inline-flex items-center justify-center rounded-md bg-surface-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					>
						<span class="sr-only">Close menu</span>
						<!-- Heroicon name: outline/x-mark -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
			<div class="mt-6">
				<nav class="grid grid-cols-1 gap-7">
					<a
						href="/#services"
						on:click={closeMobileMenu}
						class="unstyled no-underline -m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
					>
						<div
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary-500 text-white"
						>
							<!-- Heroicon name: outline/chart-bar -->
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
									d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
								/>
							</svg>
						</div>
						<div class="ml-4 text-base font-medium text-gray-900">Services</div>
					</a>

					<a
						href="/blog"
						class="unstyled no-underline -m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
					>
						<div
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary-500 text-white"
						>
							<!-- Heroicon name: outline/cursor-arrow-rays -->
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
									d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
								/>
							</svg>
						</div>
						<div class="ml-4 text-base font-medium text-gray-900">Blog</div>
					</a>

					<a
						href="/#about"
						on:click={closeMobileMenu}
						class="unstyled no-underline -m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
					>
						<div
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary-500 text-white"
						>
							<!-- Heroicon name: outline/shield-check -->
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
									d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
								/>
							</svg>
						</div>
						<div class="ml-4 text-base font-medium text-gray-900">About</div>
					</a>
					<div class="grid grid-cols-2 gap-4">
						<a
							href="/#services"
							on:click={closeMobileMenu}
							class="unstyled text-sm font-medium text-gray-900 hover:text-gray-700"
							>Athletic Performance</a
						>

						<a
							href="/#services"
							on:click={closeMobileMenu}
							class="unstyled text-sm font-medium text-gray-900 hover:text-gray-700"
							>Physical Rehabilitation</a
						>

						<a
							href="/#services"
							on:click={closeMobileMenu}
							class="unstyled text-sm font-medium text-gray-900 hover:text-gray-700"
							>Sports Injuries</a
						>

						<a
							href="#"
							on:click={closeMobileMenu}
							class="unstyled text-sm font-medium text-gray-900 hover:text-gray-700"
							>Privacy Policy</a
						>
					</div>
				</nav>
			</div>
		</div>
		<div class="py-6 px-5">
			{#if socialMedia}
				<div class="mb-6">
					<SocialMedia {socialMedia} />
				</div>
			{/if}
			<div class="mt-6">
				<a href="#" class="flex w-full btn variant-filled-primary">Sign up</a>
				<p class="mt-6 text-center text-base font-medium text-gray-500">
					Existing customer?
					<a href="#" class="unstyled text-secondary-600 hover:text-secondary-500">Sign in</a>
				</p>
			</div>
		</div>
	</div>
</div>
