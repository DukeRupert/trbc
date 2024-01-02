<!-- Centered with background image -->
<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type {ContentBlock} from '$lib/sanity/queries/page/types';
	import { PortableText } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<ContentBlock>;
	const { value } = portableText;
</script>

<div class="mt-10 mx-auto max-w-2xl prose dark:prose-invert">
	<PortableText value={value.content} />
</div>

