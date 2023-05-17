<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { Team } from '$lib/sanity/types/team';
	import { urlFor } from '$lib/sanity/client';

	export let portableText: CustomBlockComponentProps<Team>;
	const { value } = portableText;
</script>

<div id="about" class="bg-white py-24 md:py-32 lg:py-40">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="unstyled text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{value?.title}
			</h2>
			<p class="unstyled mt-6 text-lg leading-8 text-gray-600">
				{value?.tagline}
			</p>
		</div>
		{#if value?.members && value?.members.length > 0}
			<ul
				role="list"
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
			>
				{#each value?.members as { name, title, description, image, link }}
					<li>
						<img
							class="aspect-[3/2] w-full rounded-2xl object-contain"
							src={urlFor(image?.asset).size(900, 600).format('webp').url()}
							alt={image?.alt}
						/>
						<h3 class="unstyled mt-6 text-lg font-semibold leading-8 text-gray-900">{name}</h3>
						<p class="unstyled text-base leading-7 text-gray-600">{title}</p>
						<p class="unstyled mt-4 text-base leading-7 text-gray-600">
							{description}
						</p>
						{#if link}
							<a
								href={link}
								class="unstyled mt-6 text-base font-semibold leading-7 text-primary-500 hover:underline underline-offset-2"
								>Learn more <span aria-hidden="true">→</span></a
							>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
