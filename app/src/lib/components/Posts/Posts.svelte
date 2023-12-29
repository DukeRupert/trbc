<script lang="ts">
	import type { Post } from './post';
	import type { Orientation } from './params';
	import Card from './Card.svelte';

	export let posts: Post[] = [];
	export let title: string = 'From the blog';
	export let description: string = 'Learn how to grow your business with our expert advice.';
	export let orientation: Orientation = 'horizontal';
</script>

{#if orientation === 'horizontal'}
	<div class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-4xl">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
				{#if description}
					<p class="mt-2 text-lg leading-8 text-gray-600">
						{description}
					</p>
				{/if}
				<div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
					{#each posts as post, i}
						<Card data={post} orientation="vertical" />
					{/each}
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
				{#each posts as post, i}
					<Card data={post} />
				{/each}
			</div>
		</div>
	</div>
{/if}
