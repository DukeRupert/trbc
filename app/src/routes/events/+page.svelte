<script lang="ts">
	import type { PageData } from './$types';
	import ListView from '$lib/components/portableText/calendar/ListView.svelte';

	export let data: PageData;
	const { events } = data;
	console.log(data);
</script>

<ListView {events} />
