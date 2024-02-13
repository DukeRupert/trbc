<script lang="ts">
	import { formatDate, fromISOtoDatetime, fromISOtoTime } from '$lib/utils';
	import FadeIn from '$lib/components/FadeIn.svelte';
	import type { Event } from '$lib/sanity/queries';

	export let title = '';
	export let description = '';
	export let events: Event[] = [];
</script>

<section class="bg-surface-50 dark:bg-surface-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto max-w-2xl lg:max-w-4xl">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
				{#if description}
					<p class="mt-2 text-lg leading-8 text-gray-600">
						{description}
					</p>
				{/if}
			</div>
			<ol class="mt-12 lg:mt-20 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
				{#each events as event, i}
					<FadeIn i={i * 150}>
						<a href={`/events/${event.slug.current}`}>
							<li class="py-4 sm:flex hover:bg-surface-200 dark:hover:bg-surface-800">
								<time datetime={fromISOtoDatetime(event.date.toString())} class="w-28 flex-none"
									>{formatDate(event.date, {
										weekday: 'short',
										day: 'numeric',
										month: 'short'
									})}</time
								>
								<p class="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
									{event.title}
								</p>
								<p class="flex-none sm:ml-6">
									<time datetime={fromISOtoDatetime(event.date.toString())}
										>{fromISOtoTime(event.date)}</time
									>
								</p>
							</li>
						</a>
					</FadeIn>
				{/each}
			</ol>
		</div>
	</div>
</section>
