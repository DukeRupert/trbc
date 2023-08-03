<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { Hero } from '$lib/sanity/types/hero';
	import { urlFor } from '$lib/sanity/client';

	export let portableText: CustomBlockComponentProps<Hero>;
	const { value } = portableText;
</script>

<div class="relative bg-white">
	<div class="mx-auto max-w-7xl pb-16 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
		<div class="px-6 pt-16 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
			<div class="mx-auto max-w-2xl lg:mx-0">
				{#if value?.logo}
					<img
						class="h-24 w-auto mx-auto md:mx-0"
						src={urlFor(value?.logo?.asset).height(200).format('webp').url()}
						alt="The Ridge Bible Church logo"
						height="200"
						width="479"
					/>
				{/if}
				{#if value?.isHighlight}
					<div class="mt-8 sm:mt-32 sm:flex lg:mt-16">
						<div
							class="relative animate-bounce rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-primary-700/30 hover:ring-primary-900/20"
						>
							{value?.highlightText}
							<a
								href={value?.highlightHref}
								class="whitespace-nowrap font-semibold text-primary-600"
								><span class="absolute inset-0" aria-hidden="true" />Learn more
								<span aria-hidden="true">&rarr;</span></a
							>
						</div>
					</div>
				{/if}
				<h1 class="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
					{value?.heading}
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					{value?.subtext}
				</p>
				{#if value?.isPrimaryAction || value?.isSecondaryAction}
					<div class="mt-10 flex items-center gap-x-6">
						{#if value?.isPrimaryAction && value?.primaryText && value?.primaryHref}
							<a href={value.primaryHref} class="btn variant-filled-primary">{value.primaryText}</a>
						{/if}
						{#if value?.isSecondaryAction && value?.secondaryText && value?.secondaryHref}
							<a href={value.secondaryHref} class="btn variant-ringed-primary"
								>{value.secondaryText} <span aria-hidden="true">→</span></a
							>
						{/if}
					</div>
				{/if}
			</div>
		</div>
		<div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
			<img
				class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
				src={urlFor(value?.image?.asset).width(1080).format('webp').url()}
				alt={value?.image?.alt}
				height="720"
				width="1080"
			/>
		</div>
	</div>
</div>
