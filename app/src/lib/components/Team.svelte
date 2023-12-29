<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { Team } from '$lib/sanity/types/team';
	import S from '$lib/sanity'	
	import FadeIn from './FadeIn.svelte';

	export let portableText: CustomBlockComponentProps<Team>;
	const { value } = portableText;
</script>

<div id="staff" class="bg-white py-24 md:py-32 lg:py-40">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
		<FadeIn>
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
			>
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{value?.title ?? 'Our people'}
				</h2>
				<p class="mt-6 text-xl leading-8 text-gray-600">
					{value?.tagline ??
						'Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.'}
				</p>
				<!-- <p class="mt-6 text-base leading-7 text-gray-600">
					{value?.subtext ??
						`Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
		      Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque
					reprehenderit.`}
				</p> -->
			</div>
		</FadeIn>
		{#if value?.members && value?.members.length > 0}
			<ul
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
			>
				{#each value?.members as { name, title, description, image, link }, i}
					<FadeIn i={i * 150}>
						<li>
							<img
								class="aspect-square w-full rounded-2xl object-contain"
								src={S.urlFor(image?.asset).size(400, 400).format('webp').url()}
								alt={image?.alt}
								height="400"
								width="400"
							/>
							<h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">{name}</h3>
							<p class="text-base leading-7 text-gray-600">{title}</p>
							{#if description}
								<p class="mt-4 text-base leading-7 text-gray-600">
									{description}
								</p>
							{/if}
							{#if link}
								<a
									href={link}
									class="mt-6 text-base font-semibold leading-7 text-primary-500 hover:underline underline-offset-2"
									>Learn more <span aria-hidden="true">→</span></a
								>
							{/if}
						</li>
					</FadeIn>
				{/each}
			</ul>
		{/if}
	</div>
</div>
