<script lang="ts">
	import type { ReqGetPosts } from '$lib/sanity/client';
	import type { Orientation } from './params';
	import FadeIn from '$lib/components/FadeIn.svelte';
	import Placeholder from './Placeholder.svelte';
	import Card from './Card.svelte';

	export let p: Promise<ReqGetPosts>;
	export let title: string = 'From the blog';
	export let description: string = 'Find out what has been happening at The Ridge Bible Church';
	export let orientation: Orientation = 'horizontal';
</script>

{#if orientation === 'horizontal'}
	<div class="bg-surface-50 dark:bg-surface-900 py-24 sm:py-32">
		<div class="mx-auto max-w-7xl">
			<div class="mx-auto max-w-2xl lg:max-w-4xl">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
				{#if description}
					<p class="mt-2 text-lg leading-8 text-gray-600">
						{description}
					</p>
				{/if}
				<div class="mt-12 space-y-20 lg:mt-20 lg:space-y-20">
					{#await p}
						<Placeholder />
					{:then req}
						{#if req.posts.length > 0}
							{#each req.posts as post, i}
								<FadeIn i={i * 150}>
									<Card data={post} orientation="vertical" />
								</FadeIn>
							{/each}
						{:else}
							<p class="text-sm leading-6 text-gray-500">No posts were found.</p>
						{/if}
					{:catch error}
						<p class="text-sm leading-6 text-error-500">
							An error occured when fetching the posts.
						</p>
					{/await}
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="bg-white py-24 sm:py-32 min-h-screen">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
				{#if description}
					<p class="mt-2 text-lg leading-8 text-gray-600">
						{description}
					</p>
				{/if}
			</div>
			<div
				class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				{#await p}
					<Placeholder />
				{:then req}
					{#if req.posts.length > 0}
						{#each req.posts as post, i}
							<FadeIn i={i * 150}>
								<Card data={post} />
							</FadeIn>
						{/each}
					{:else}
						<p>So much empty...</p>
					{/if}
				{:catch error}
					<p>An error occured when fetching the posts.</p>
				{/await}
			</div>
		</div>
	</div>
{/if}
