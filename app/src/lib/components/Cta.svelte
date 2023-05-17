<!-- Simple centered on brand -->
<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { Cta } from '$lib/sanity/types/cta';

	export let portableText: CustomBlockComponentProps<Cta>;
	const { value } = portableText;
</script>

<div class="bg-primary-500">
	<div class="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="unstyled text-4xl font-bold tracking-tight text-on-primary-token">
				{value?.heading}
			</h2>
			<p class="unstyled mx-auto mt-6 max-w-xl text-lg leading-8 text-on-primary-token">
				{value?.subtext}
			</p>
			<div class="unstyled mt-10 flex items-center justify-center gap-x-6">
				{#if value?.isPrimaryAction}
					<!-- content here -->
					<a href={value?.primaryHref} class="btn variant-filled-secondary">{value?.primaryText}</a>
				{/if}
				{#if value?.isSecondaryAction}
					<!-- content here -->
					<a
						href={value?.secondaryHref}
						class="btn variant-ringed-secondary text-on-secondary-token"
						>{value?.secondaryText}<span aria-hidden="true">→</span></a
					>
				{/if}
			</div>
		</div>
	</div>
</div>
