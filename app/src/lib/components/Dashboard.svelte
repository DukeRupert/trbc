<script lang="ts">
	import type { Event, Post } from '$lib/sanity/queries';
	import ListView from './portableText/calendar/ListView.svelte';
	import Posts from './portableText/Posts/Posts.svelte';

	export let events: Event[] = [];
	export let posts: Post[] = [];

	const postData = {
		title: "From the blog",
		description: "Find out what has been happening at The Ridge Bible Church",
		posts
	}

	const eventData = {
		title: "Upcoming events",
		description: "Don't miss out on these activites.",
		events
	}
</script>

<div class="py-24 md:py-32 lg:py-40">
	<div class="mx-auto grid max-w-5xl grid-cols-1 gap-y-20 gap-x-12 px-6 lg:px-8 lg:grid-cols-5">
		<div class="col-span-3 lg:col-span-2">
			<ListView {...eventData} />
		</div>
		<div class="col-span-3">
			<Posts {...postData} />
		</div>
	</div>
</div>
