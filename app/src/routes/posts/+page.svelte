<script lang="ts">
	import type { PageData } from './$types';
	import Posts from '$lib/components/portableText/Posts'

	export let data: PageData;
	const { posts } = data;
</script>

<Posts {posts} />


