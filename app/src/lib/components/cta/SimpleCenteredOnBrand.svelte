<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { Cta } from '$lib/sanity/types/cta';

	export let portableText: CustomBlockComponentProps<Cta>;
	const { value } = portableText;
</script>

<div class="bg-primary-700">
	<div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				{value?.heading ?? ''}
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-200">
				{value?.subtext ?? ''}
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				{#if value?.isPrimaryAction}
					<a href={value?.primaryHref ?? ''} class="btn variant-filled-secondary"
						>{value?.primaryText ?? ''}</a
					>
				{/if}
				{#if value?.isSecondaryAction}
					<a href={value?.secondaryHref ?? ''} class="btn variant-ghost-secondary text-white"
						>{value?.secondaryText ?? ''} <span aria-hidden="true">→</span></a
					>
				{/if}
			</div>
		</div>
	</div>
</div>
