<script lang="ts">
	import type { Event } from '$lib/sanity/queries';
	import { formatDate, fromISOtoDatetime, fromISOtoTime } from '$lib/utils';
	export let events: Event[];
</script>

<section class="mt-12">
	<h2 class="text-base font-semibold leading-6 text-gray-900">Upcoming events</h2>
	<ol class="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
		{#each events as event}
			<a href={`/events/${event.slug.current}`}>
				<li class="py-4 sm:flex hover:bg-surface-200 dark:hover:bg-surface-800">
					<time datetime={fromISOtoDatetime(event.date.toString())} class="w-28 flex-none"
						>{formatDate(event.date, { weekday: 'short', day: 'numeric', month: 'short' })}</time
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
		{/each}
	</ol>
</section>
