<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { Reviews, Testimonial } from '$lib/sanity/types/reviews';
	import Column from './Column.svelte';

	export let portableText: CustomBlockComponentProps<Reviews>;
	const { value } = portableText;

	// const reviews: Reviews = [
	// 	{
	// 		title: 'It really works.',
	// 		body: 'I downloaded Pocket today and turned $5000 into $25,000 in half an hour.',
	// 		author: 'CrazyInvestor',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'You need this app.',
	// 		body: 'I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.',
	// 		author: 'CluelessButRich',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'This shouldn’t be legal.',
	// 		body: 'Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.',
	// 		author: 'LivingDaDream',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'Screw financial advisors.',
	// 		body: 'I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.',
	// 		author: 'JordanBelfort1962',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'I love it!',
	// 		body: 'I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!',
	// 		author: 'MrBurns',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'Too good to be true.',
	// 		body: 'I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!',
	// 		author: 'LazyRich99',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'Wish I could give 6 stars',
	// 		body: 'This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.',
	// 		author: 'SarahLuvzCash',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'Bought an island.',
	// 		body: 'Yeah, you read that right. Want your own island too? Get Pocket.',
	// 		author: 'ScroogeMcduck',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'No more debt!',
	// 		body: 'After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?',
	// 		author: 'BruceWayne',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'I’m 13 and I’m rich.',
	// 		body: 'I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!',
	// 		author: 'RichieRich',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'Started an investment firm.',
	// 		body: 'I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!',
	// 		author: 'TheCountOfMonteChristo',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'It’s like a superpower.',
	// 		body: 'Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!',
	// 		author: 'ClarkKent',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'Quit my job.',
	// 		body: 'I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!',
	// 		author: 'GeorgeCostanza',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'Don’t download this app',
	// 		body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
	// 		author: 'JeffBezos',
	// 		rating: 5
	// 	},
	// 	{
	// 		title: 'Don’t download this app',
	// 		body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
	// 		author: 'JeffBezos',
	// 		rating: 5
	// 	}
	// ];

	function splitArray(array: Testimonial[], numParts: number) {
		let result: Reviews[] = [];
		for (let i = 0; i < array.length; i++) {
			let index = i % numParts;
			if (!result[index]) {
				result[index] = [];
			}
			result[index].push(array[i]);
		}
		return result;
	}

	let columns: Reviews[] = splitArray(value?.testimonials, 2);
</script>

<section id="reviews" aria-labelledby="reviews-title" class="relative bg-white">
	<div class="mx-auto max-w-7xl lg:gap-x-8 lg:px-8 text-center">
		<div class="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
			<h2 class="unstyled text-lg font-semibold leading-8 tracking-tight text-primary-600">
				Reviews
			</h2>
			<p class="unstyled mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				What Our Client's Say
			</p>
			<p class="unstyled mt-6 text-lg leading-8 text-gray-600">
				We are thankful to our many customers who took the time to let us know how we have helped :)
			</p>

			<!-- Review Grid -->
			<div
				class="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2"
			>
				<!-- Review Columns -->
				<Column reviews={[...columns[0], ...columns[1]]} msPerPixel={15} />
				<!-- <ReviewColumn
					reviews={[...columns[1], ...columns[2][1]]}
					className="hidden md:block"
					reviewClassName={(reviewIndex) => reviewIndex >= columns[1].length && 'lg:hidden'}
					msPerPixel={15}
				/> -->
				<Column
					reviews={[...columns[1], ...columns[0]]}
					className="hidden md:block"
					msPerPixel={20}
				/>

				<div
					class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white"
				/>
				<div
					class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white"
				/>
			</div>
		</div>
	</div>
</section>
