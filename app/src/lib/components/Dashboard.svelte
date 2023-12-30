<script lang="ts">
	import type { ReqGetEvents, ReqGetPosts } from '$lib/sanity/client';
	import Spinner from './Spinner.svelte';
	import ListView from './portableText/calendar/ListView.svelte';
	import Posts from './portableText/Posts/Posts.svelte';

	export let e: Promise<ReqGetEvents>;
	export let p: Promise<ReqGetPosts>;
</script>

<div class="py-24 md:py-32 lg:py-40">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 lg:grid-cols-5">
		<div class="col-span-2">
			<ListView {e} />
		</div>
		<div class="col-span-3">
			<Posts {p} />
		</div>
	</div>
</div>
