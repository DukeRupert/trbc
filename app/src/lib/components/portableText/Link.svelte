<script lang="ts">
	import type { PortableText } from '@portabletext/svelte';
	export let portableText: PortableText;
</script>

<a href={portableText.value.href} target="_blank" rel="noreferrer">
	<slot />
</a>
