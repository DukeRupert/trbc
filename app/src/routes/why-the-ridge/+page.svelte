<script lang="ts">
	import { urlFor } from '$lib/sanity/client';
	import type { PageData } from './$types';
	import Seo from '$lib/components/Seo.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import { page } from '$app/stores';

	export let data: PageData;
	console.log(data);
</script>

<Seo type="page" {...data?.page?.seo} url={$page.url.href} />

<div class="relative bg-white">
	<div class="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
		<div
			class="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2"
		>
			<div class="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
				<img
					class="absolute inset-0 h-full w-full bg-gray-50 object-cover"
					src={urlFor(data?.page?.seo?.mainImage?.asset).height(1400).format('webp').toString()}
					alt={data?.page?.seo?.mainImage?.alt ?? ''}
				/>
			</div>
		</div>
		<div class="px-6 lg:contents">
			<div
				class="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2"
			>
				<p class="text-base font-semibold leading-7 text-primary-600">About Us</p>
				<h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Why the Ridge?
				</h1>
				<p class="mt-6 text-xl leading-8 text-gray-700">
					It is always interesting to consider what an organization’s name and logo are based on.
					The following are just a few of the ideas that are represented by, and in, our name, “The
					Ridge Bible Church”, the mountain ridge logo with its three distinct peaks, and its
					crimson red coloration against a white background.
				</p>
				<div class="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
					<p>
						It is always interesting to consider what an organization’s name and logo are based on.
						The following are just a few of the ideas that are represented by, and in, our name,
						“The Ridge Bible Church”, the mountain ridge logo with its three distinct peaks, and its
						crimson red coloration against a white background.
					</p>

					<p class="mt-8">
						The short version is that “The Ridge” is intended to be a conversation starter. The fact
						that you clicked on this page is proof that it works! When you get to name a church, or,
						in our case, rename it, you have an opportunity to communicate things about your
						organization, whether that be its theology, its values, or what it aspires to. In the
						case of our name and logo combination, there are a number of ideas at play, but
						essentially, the mountain ridge is a metaphor for the Christian life.
					</p>
					<p class="mt-8">
						Based on the idea that the Holy Spirit indwells a follower of Christ, and is our guide
						in life, the illustration (originally called the “High Ridge of Discipline”) uses a
						narrow mountain ridge as a metaphor for the journey of following Christ. This journey is
						dangerous if we misstep, lest we fall off the ridge to either side.
					</p>
					<p class="mt-8">
						On one side of the ridge is the valley of legalism, in which we are tempted to trust in
						our own righteousness through performance under the law, rather than wholly trusting in
						the imputed righteousness of Christ alone. Trusting in our own works is deadly, as the
						Apostle Paul very effectively argued in his letter to the Ephesians.
					</p>
					<p class="mt-8">
						On the other side is the valley of laxity, or licentiousness. This is the side we will
						fall into if we buy into the lie that since we have intellectually assented to Jesus as
						our savior, we then are covered by grace – no matter what we then do. Paul also argued
						passionately against this error, going so far as to say in his letter to the Galatians,
						“God will not be mocked”. That warning should send a chill down the spine of anyone who
						thinks they can live however they choose while claiming to be a follower of Christ.
					</p>
					<p class="mt-8">
						Jesus taught in the Gospel of John that if we truly abide in him, we will bear much
						fruit (i.e. the fruit of the Spirit, such as love, joy, peace, patience, etc.), which
						are the characteristics, or traveling skills, if you will, for remaining on the narrow
						path towards Christlikeness. So, in the end, the high mountain ridge is a metaphor for
						the Christian life under the guidance of the Holy Spirit.
					</p>
					<p class="mt-8">
						The ridgeline image has three distinct peaks, yet they are all a part of the same
						mountain; just like the Trinity, they are the same age, the same substance, and they
						stand in unity, yet there are clear distinctions between them.
					</p>
					<p class="mt-8">
						Finally, the bottom line of the logo, and for us culturally, is that “we are a Bible
						church”. This means we rely on the Word of God as our final authority in all our
						endeavors.
					</p>

					<p class="mt-8">
						Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit
						molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
						varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut.
						Ac lorem vel integer orci.
					</p>
					<p class="mt-8">
						There’s much more to the story, so if you would like to learn more about our church,
						please contact us.
					</p>
				</div>
			</div>
		</div>
		<Cta />
	</div>
</div>
