<script lang="ts">
	import Sanity from '$lib/sanity/client';
	import { getPosts } from '$lib/sanity/query';
	import PostCard from './PostCard.svelte';
	import type { Post } from '$lib/sanity/types/post';
	import type { Posts } from '$lib/sanity/types/posts';
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<Posts>;
	const { value } = portableText;

	let { title: tag } = value?.defaultTag ?? 'blog';
	let max = value?.max ?? 6;
	$: parameters = { tag, max };

	$: fetchPosts = async () => {
		const posts: Post[] = await Sanity.fetch(getPosts, parameters);

		if (posts) {
			return posts;
		} else {
			return [];
		}
	};

	function changeTag(event: MouseEvent) {
		tag = event?.target?.id;
	}
</script>

<div class="relative">
	{#if value?.searchTags && value?.searchTags.length > 0}
		<div class="max-w-md flex space-x-4 py-6">
			{#each value?.searchTags as { title }}
				<!-- content here -->
				<button
					id={title}
					type="button"
					on:click={changeTag}
					class="chip {title == tag ? 'variant-filled-primary' : 'variant-filled-surface'}"
					>{title}</button
				>
			{/each}
		</div>
	{/if}

	<div
		class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8"
	>
		{#if tag}
			{#await fetchPosts()}
				<!-- promise is pending -->
				<p>Loading...</p>
			{:then posts}
				<!-- promise was fulfilled -->
				{#if posts.length > 0}
					<!-- content here -->
					{#each posts as post (post.slug.current)}
						<PostCard {post} />
					{/each}
				{:else}
					<p>Something went wrong...</p>
				{/if}
			{/await}
		{/if}
	</div>
</div>
