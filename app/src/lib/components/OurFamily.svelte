<script lang="ts">
	import S from '$lib/sanity'	
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { MediaGallery } from '$lib/sanity/types/mediaGallery';
	import FadeIn from './FadeIn.svelte';
	export let portableText: CustomBlockComponentProps<MediaGallery>;
	const { value } = portableText;
</script>

<div class="overflow-hidden py-32">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
		>
			<FadeIn>
				<div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
					<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						{value?.title ?? 'Our people'}
					</h2>
					<p class="mt-6 text-xl leading-8 text-gray-600">
						{value?.text ??
							'Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.'}
					</p>
					<p class="mt-6 text-base leading-7 text-gray-600">
						{value?.subtext ??
							`Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
		      Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque
					reprehenderit.`}
					</p>
				</div>
			</FadeIn>
			<div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
				{#if value?.gallery[0]}
					<div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
						<img
							src={S.urlFor(value.gallery[0].image.asset).width(1152).format('webp').toString()}
							alt={value.gallery[0].image.alt}
							class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
							width="1152"
							height="842"
						/>
					</div>
				{/if}
				<div
					class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
				>
					{#if value?.gallery[1]}
						<div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
							<img
								src={S.urlFor(value.gallery[1].image.asset).width(768).format('webp').toString()}
								alt={value.gallery[1].image.alt}
								class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
								width="768"
								height="604"
							/>
						</div>
					{/if}
					{#if value?.gallery[2]}
						<div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
							<img
								src={S.urlFor(value.gallery[2].image.asset).width(1152).format('webp').toString()}
								alt={value.gallery[2].image.alt}
								class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
								width="1152"
								height="842"
							/>
						</div>
					{/if}
					{#if value?.gallery[3]}
						<div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
							<img
								src={S.urlFor(value.gallery[3].image.asset).width(768).format('webp').toString()}
								alt={value.gallery[3].image.alt}
								class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
								width="768"
								height="604"
							/>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
