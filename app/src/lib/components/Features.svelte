<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { Features } from '$lib/sanity/types/features';
	import { urlFor } from '$lib/sanity/client';

	export let portableText: CustomBlockComponentProps<Features>;
	const { value } = portableText;
</script>

<div id="services" class="bg-white py-16 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-lg font-semibold leading-8 tracking-tight text-primary-600">
				{value?.heading}
			</h2>
			<p class="h2 font-bold tracking-tight">
				{value?.title}
			</p>
			<p class="mt-6">
				{value?.tagline}
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				{#if value?.features}
					{#each value.features as feature}
						{#if feature?.useIcon}
							<div class="flex flex-col">
								<dt
									class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900"
								>
									<span class="text-primary-500">{@html feature?.icon?.svg}</span>
									{feature?.title}
								</dt>
								<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p class="flex-auto">
										{feature?.description}
									</p>
									{#if feature?.link}
										<p class="mt-6">
											<a
												href={feature?.link}
												class="unstyled text-base font-semibold leading-7 text-primary-500 hover:underline underline-offset-2"
												>Learn more <span aria-hidden="true">→</span></a
											>
										</p>
									{/if}
								</dd>
							</div>
						{:else if feature.useImage && feature?.image?.asset}
							<div class="sm:flex">
								<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
									<img
										src={urlFor(feature.image.asset).width(600).height(400).format('webp').url()}
										alt={feature.image.alt}
										height="400"
										width="600"
										class="w-full h-full object-contain border border-gray-300 bg-white text-gray-300 sm:w-32 rounded-md"
									/>
								</div>
								<div>
									<h4 class="unstyled text-lg font-bold">{feature?.title}</h4>
									<p class="unstyled mt-1">{feature?.description}</p>
									{#if feature?.link}
										<p class="mt-2">
											<a
												href={feature?.link}
												class="unstyled text-base font-semibold leading-7 text-primary-500 hover:underline underline-offset-2"
												>Learn more <span aria-hidden="true">→</span></a
											>
										</p>
									{/if}
								</div>
							</div>
						{/if}
					{/each}
				{/if}
			</dl>
		</div>
	</div>
</div>
