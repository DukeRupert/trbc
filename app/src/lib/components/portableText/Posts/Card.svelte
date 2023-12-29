<script lang="ts">
	import type { Post } from '$lib/sanity/queries/post/post';
	import { formatDate, fromISOtoDatetime } from '$lib/utils';
	import SanityImage from '$lib/sanity/SanityImage/Image.svelte';

	type Orientation = 'horizontal' | 'vertical';

	export let data: Post;
	export let orientation: Orientation = 'horizontal';
	$: ({ title, slug, excerpt, coverImage, tags, category, date, author, content } = data);
</script>

{#if orientation === 'vertical'}
	<article class="relative isolate flex flex-col gap-8 lg:flex-row">
		<div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
			<SanityImage
				image={coverImage}
				maxWidth={800}
				cls="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
			/>
			<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
		</div>
		<div>
			<div class="flex items-center gap-x-4 text-xs">
				<time datetime={fromISOtoDatetime(date.toString())} class="text-gray-500"
					>{formatDate(date)}</time
				>
				{#if category.length > 0}
					{#each category as c}
						<a
							href="#"
							class="badge variant-soft hover:variant-filled transition-all duration-150 ease-out-expo"
							>{c.title}</a
						>
					{/each}
				{/if}
			</div>
			<div class="group relative">
				<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
					<a href={`/posts/${slug.current}`}>
						<span class="absolute inset-0" />
						{title}
					</a>
				</h3>
				<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
					{excerpt}
				</p>
			</div>
			{#if author}
				<div class="relative mt-8 flex items-center gap-x-4">
					<SanityImage
						image={data.author.image}
						maxWidth={200}
						cls="h-10 w-10 rounded-full bg-gray-50"
					/>
					<div class="text-sm leading-6">
						<p class="font-semibold text-gray-900">
							<a href={`/authors/${author.slug.current}`}>
								<span class="absolute inset-0" />
								{author.name}
							</a>
						</p>
						<!-- <p class="text-gray-600">Co-Founder / CTO</p> -->
					</div>
				</div>
			{/if}
		</div>
	</article>
{:else}
	<article class="flex flex-col items-start justify-between">
		<div class="relative w-full">
			<SanityImage
				image={coverImage}
				maxWidth={600}
				cls="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
			/>
			<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
		</div>
		<div class="max-w-xl">
			<div class="mt-8 flex items-center gap-x-4 text-xs">
				<time datetime={fromISOtoDatetime(date.toString())} class="text-gray-500"
					>{formatDate(date)}</time
				>
				{#if category.length > 0}
					{#each category as c}
						<a
							href="#"
							class="badge variant-soft hover:variant-filled transition-all duration-150 ease-out-expo"
							>{c.title}</a
						>
					{/each}
				{/if}
			</div>
			<div class="group relative">
				<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
					<a href={`/posts/${slug.current}`}>
						<span class="absolute inset-0" />
						{title}
					</a>
				</h3>
				<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
					{excerpt}
				</p>
			</div>
			{#if author}
				<div class="relative mt-8 flex items-center gap-x-4">
					<SanityImage
						image={author.image}
						maxWidth={200}
						cls="h-10 w-10 rounded-full bg-gray-100"
					/>
					<div class="text-sm leading-6">
						<p class="font-semibold text-gray-900">
							<a href="#">
								<span class="absolute inset-0" />
								{author.name}
							</a>
						</p>
						<!-- <p class="text-gray-600">Co-Founder / CTO</p> -->
					</div>
				</div>
			{/if}
		</div>
	</article>
{/if}