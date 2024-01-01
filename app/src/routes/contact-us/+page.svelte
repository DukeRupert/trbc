<script lang="ts">
	import type { PageData } from './$types';
	import ContactForm from './ContactForm.svelte';

	export let data: PageData;
	$: ({ form } = data);
</script>

<div class="min-h-screen bg-surface-50 dark:bg-surface-900 px-6 py-24 sm:py-32 lg:px-8">
	<ContactForm data={form} />
</div>
