<script lang="ts">
	import type { Post } from '$lib/sanity/types/post';
	import { formatDate, fromISOtoDatetime } from '$lib/utils';
	import SanityImage from '$lib/sanity/SanityImage/SanityImage.svelte';
	export let data: Post;
	const { coverImage, title, author, excerpt, category, tags, date } = data;
</script>

<article class="relative isolate flex flex-col gap-8 lg:flex-row">
	<div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
		<img
			src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
			alt=""
			class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
		/>
		<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
	</div>
	<div>
		<div class="flex items-center gap-x-4 text-xs">
			<time datetime={fromISOtoDatetime(date.toString())} class="text-gray-500"
				>{formatDate(date)}</time
			>
			<a
				href="#"
				class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
				>Marketing</a
			>
		</div>
		<div class="group relative">
			<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
				<a href="#">
					<span class="absolute inset-0" />
					{title}
				</a>
			</h3>
			<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
				{excerpt}
			</p>
		</div>
		<div class="relative mt-8 flex items-center gap-x-4">
			<SanityImage
				image={data.author.image}
				maxWidth={200}
				cls="h-10 w-10 rounded-full bg-gray-50"
			/>
			<div class="text-sm leading-6">
				<p class="font-semibold text-gray-900">
					<a href="#">
						<span class="absolute inset-0" />
						Michael Foster
					</a>
				</p>
				<p class="text-gray-600">Co-Founder / CTO</p>
			</div>
		</div>
	</div>
</article>
