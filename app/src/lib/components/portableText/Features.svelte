<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { Features } from '$lib/sanity/queries/page/types';
	import { SanityImage } from '$lib/sanity';
	import FadeIn from '../FadeIn.svelte';

	export let portableText: CustomBlockComponentProps<Features>;
	const { value } = portableText;
</script>

<div class="bg-surface-50 dark:bg-surface-900 py-32">
	<div class="mx-auto max-w-5xl px-6 lg:px-8">
		<FadeIn>
			<div class="mx-auto max-w-2xl lg:text-center">
				<h3 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{value?.title}
				</h3>
			</div>
		</FadeIn>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				{#if value?.features}
					{#each value.features as feature, i}
						<FadeIn i={i * 150}>
							{#if feature?.useIcon}
								<div class="flex flex-col">
									<dt
										class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900"
									>
										<span class="text-primary-500"
											><img class="h-8 w-8" src={feature?.icon.metadata.downloadUrl} /></span
										>
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
										<SanityImage
											image={feature.image}
											maxWidth={600}
											cls="w-full h-full object-contain border border-gray-300 bg-white text-gray-300 sm:w-32 rounded-md"
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
						</FadeIn>
					{/each}
				{/if}
			</dl>
		</div>
	</div>
</div>
