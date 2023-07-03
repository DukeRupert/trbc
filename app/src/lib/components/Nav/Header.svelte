<script lang="ts">
	import { page } from '$app/stores';
	import { urlFor } from '$lib/sanity/client';
	import { AppBar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { drawerOpen } from '$lib/utils';
	import Menu from '$lib/icons/Menu.svelte';
	import type { Asset } from '$lib/sanity/types/features';

	export let logo: Asset;

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'bottom'
	};

	function handleclick(): void {
		drawerOpen({ id: 'navigation' });
	}
</script>

<AppBar background="bg-surface-50-900-token">
	<svelte:fragment slot="lead">
		<a href="/">
			<span class="sr-only">Return home</span><img
				class="h-8 w-auto {$page.route.id !== '/' ? 'visible' : 'invisible'}"
				src={urlFor(logo).height(80).format('webp').url()}
				alt="The Ridge Bible Church logo"
				height="80"
				width="191"
			/></a
		>
	</svelte:fragment>

	<nav class="relative hidden md:flex justify-between">
		<div class="ml-4 flex items-center space-x-6">
			<span class="relative">
				<button use:popup={popupClick}>About Us</button>
				<div class="list-nav card p-4 w-64 shadow-xl z-10" data-popup="popupClick">
					<ul>
						<li><a href="/why-the-ridge">Why the Ridge?</a></li>
						<li><a href="/statement-of-faith">Statement of Faith</a></li>
						<li><a href="/#staff">Staff</a></li>
					</ul>
				</div>
			</span>
			<!-- <a href="/sermons" class="block">Sermons</a> -->
			<a href="/#contact-us" class="block">Contact Us</a>
		</div>
		<div class="ml-auto space-x-2">
			<a
				class="btn variant-filled-primary"
				href="https://theridgebiblechurch.breezechms.com/give/online">Give</a
			>

			<a class="btn variant-ringed-primary" href="https://theridgebiblechurch.breezechms.com/login"
				>Sign In</a
			>
		</div>
	</nav>

	<svelte:fragment slot="trail"
		><button class="btn-icon md:hidden" type="button" on:click={handleclick}>
			<span class="sr-only">Open main menu</span>
			<Menu />
		</button></svelte:fragment
	>
</AppBar>
