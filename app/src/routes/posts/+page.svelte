<script lang="ts">
	import type { PageData } from './$types';
	import Posts from '$lib/components/portableText/Posts';

	export let data: PageData;
</script>

<div class="min-h-screen bg-surface-50 dark:bg-surface-900 px-6 py-24 sm:py-32 lg:px-8">
	<Posts p={data.streamed.p} />
</div>
