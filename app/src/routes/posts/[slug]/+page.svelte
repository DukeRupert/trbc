<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';
	import SanityImage from '$lib/sanity/SanityImage/Image.svelte';
    import PortableText from '$lib/components/portableText/index.svelte'

	export let data: PageData;
	const { post } = data;
    console.log(post)
</script>

<div class="bg-surface-50 dark:bg-surface-900 px-6 py-32 lg:px-8">
	<div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
		<p class="text-base font-semibold leading-7 text-primary-600">{formatDate(post.date)}</p>
		<h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
		<SanityImage
			image={post.coverImage}
			maxWidth={1920}
			cls="w-full mt-16 aspect-video rounded-xl bg-gray-50 object-cover"
		/>
		<div class="mt-10 max-w-2xl prose prose-slate dark:prose-invert">
			<PortableText data={post.content} />
		</div>
		<div class="w-full mt-10 flex justify-center gap-x-6">
			<a href="/" class="btn variant-filled-primary">Return home</a>
			<a href="/posts" class="btn variant-outline-primary">View posts</a>
		</div>
	</div>
</div>
