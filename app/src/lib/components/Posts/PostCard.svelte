<script lang="ts">
	import type { Post } from '$lib/sanity/types/post';
	import { urlFor } from '$lib/sanity/client';
	export let post: Post;
</script>

<article class="card card-hover variant-ghost-tertiary">
	<a data-sveltekit-preload-data href="/blog/{post.slug.current}" class="unstyled no-underline">
		<header class="card-header">
			<img
				class="rounded-md rounded-b-none"
				src={urlFor(post?.mainImage?.asset).width(600).format('webp').url()}
				alt={post?.title}
			/>
		</header>
		<div class="p-4">
			<div class="unstyled flex-1 prose text-left p-4 space-y-2 flex flex-col">
				<h3>
					{post.title}
				</h3>
				<p class="line-clamp-4">{post.excerpt}</p>
				<p class="italic">
					{new Date(post.publishedAt).toLocaleDateString('en', {
						month: 'long',
						day: '2-digit',
						year: 'numeric'
					})}
				</p>
			</div>
		</div>
	</a>
</article>
