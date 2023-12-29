<script lang="ts">
	import type { PageData } from './$types';
	import Posts from '$lib/components/Posts'

	export let data: PageData;
	const { posts } = data;
	console.log(posts);
</script>

<Posts {posts} />
<Posts {posts} orientation="vertical" />


