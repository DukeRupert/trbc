<script lang="ts">
	import type MetaData from '$lib/sanity/queries/metaData/types';
	import type { Link } from '$lib/types/app';
	import { quadOut } from 'svelte/easing';
	import { page, navigating } from '$app/stores';
	import { Menu } from 'lucide-svelte';
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fly, type FlyParams, fade, type FadeParams } from 'svelte/transition';
	import SanityImage from '$lib/sanity/SanityImage/Image.svelte';

	export let data: MetaData;
	const { logo, socials } = data;
	export let links: Link[] = [];

	const flyParams: FlyParams = {
		x: 500,
		duration: 300,
		easing: quadOut
	};

	const fadeParams: FadeParams = {
		duration: 300,
		easing: quadOut
	};

	// Dropdown menu
	const {
		elements: { trigger, portalled, overlay, content, title, description, close },
		states: { open }
	} = createDialog();

	// For highlighting current path
	$: path = $page.route.id;

	// Close the mobile menu when navigation
	$: if ($navigating) open.set(false);
</script>

<header class="bg-surface-50 dark:bg-surface-900">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			{#if path !== '/'}
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<SanityImage image={logo} maxWidth={100} />
				</a>
			{/if}
		</div>
		<div class="flex lg:hidden">
			<button
				use:melt={$trigger}
				type="button"
				aria-controls="mobile-menu"
				aria-expanded={$open}
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			>
				<span class="sr-only">Open main menu</span>
				<Menu class="block h-6 w-6" />
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each links as { label, href }}
				<a
					{href}
					class="inline-flex items-center border-b-2 {path === href
						? 'border-red-500 text-gray-900'
						: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} px-1 pt-1 text-sm font-medium"
					>{label}</a
				>
			{/each}
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a href="#" class="text-sm font-semibold leading-6 text-gray-900"
				>Log in <span aria-hidden="true">&rarr;</span></a
			>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->

	<div use:melt={$portalled} class="lg:hidden" role="dialog" aria-modal="true">
		{#if $open}
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div
				use:melt={$overlay}
				transition:fade={fadeParams}
				class="fixed bg-gray-950/70 inset-0 z-10"
			/>
			<div
				use:melt={$content}
				transition:fly={flyParams}
				class="bg-surface-100 dark:bg-surface-800 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<SanityImage image={logo} maxWidth={100} />
					</a>
					<button
						use:melt={$close}
						aria-controls="mobile-menu"
						aria-expanded={$open}
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
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
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							{#each links as { label, href }}
								<a
									{href}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>{label}</a
								>
							{/each}
						</div>
						<div class="flex flex-col space-y-6 mt-6">
							<div class="mt-6 w-full">
								<a
									href="https://theridgebiblechurch.breezechms.com/give/online"
									class="btn variant-filled-primary w-full">Give</a
								>
							</div>
							<div class="w-full">
								<a
									href="https://theridgebiblechurch.breezechms.com/login"
									class="btn variant-outline-primary w-full">Log in</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</header>
