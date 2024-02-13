<script lang="ts">
	import church_photo from '$lib/assets/IMG-1455.jpg?run';
	import Img from '@zerodevx/svelte-img';
	import FadeIn from '$lib/components/FadeIn.svelte';

	const responsibilities = [
		{
			title: 'Preaching and Worship',
			body: [
				'Demonstrate a passion for God’s Word, leading the congregation to grow in the grace and knowledge of the Lord Jesus Christ through both preaching and teaching.',
				'Prayerfully prepare expository sermons from God’s Word, with room for topical sermons as appropriate.',
				'Demonstrate a practical approach to teaching the Word, knowledge of how people learn, and skill in providing relevant application which can build us up in our faith.',
				'Appreciate music and prayer as an act of worship and an important part of the worship service. Model a desire to see Jesus Christ glorified through corporate worship and prayer.',
				'Meet regularly with staff and leaders to coordinate the themes and content of the worship services and ensure complete preparation for weekly worship.',
				'Share in the oversight and administration of the sacraments with the Elders and church leaders.'
			]
		},
		{
			title: 'Leadership and Administration',
			body: [
				'Bring biblical truth and a Christ-like example to all areas of ministry at The Ridge Bible Church.',
				'Serve as an effective administrator with the ability to coordinate worship services, run effective meetings, vision cast, and direct maintenance and improvement projects.',
				'Provide leadership that equips, empowers, and encourages staff and volunteers to most effectively impact the areas of ministry where they serve.',
				'Model excellent communication skills and serve as a faithful steward in all interactions.',
				'Lead the Elder Team and participate in Elder Board meetings as a permanent vocational Elder with equal rights and responsibilities.',
				'Work with the Elders to conduct annual reviews, evaluate progress, and set goals.',
				'Work with the Elders to provide directional and visionary leadership for the ministry of the church.'
			]
		},
		{
			title: 'Congregational Care',
			body: [
				'Demonstrate love and concern for the congregation and individuals showing personal interest and building relationships among the people of Graham and TRBC.',
				'Eager to engage in the lives of church members, showing hospitality and an interest in God’s people.',
				'Work with the Elders and leaders to discern and provide appropriate care to the congregation and community.',
				'Conduct pastoral care to the home-bound and make hospital visits as needed and in partnership with the Elders and leaders.',
				'Provide instruction and model Christ’s love beyond preaching - attending Sunday School, small groups, and social gatherings.'
			]
		},
		{
			title: 'Discipleship and Evangelism',
			body: [
				'Provide oversight, leadership, and equipping for adult discipleship and the discipleship of children and youth ensuring each member understands the essential doctrine of our faith.',
				'Passionately desire to lead the congregation in Biblical understanding while living in a changing and sinful world.',
				'Demonstrate a heart for others, pursuing and persistently evangelizing and bringing them to Christ.',
				'Emphasize and fan the flame of evangelism through prayer, preaching, leadership, and decision-making.',
				'Model personal evangelism through connections with unchurched individuals, visitors, and outreach efforts.',
				'Support the Ministry Teams that promote growth and outreach.'
			]
		},
		{
			title: 'Personal Qualifications',
			body: [
				'Called by God to serve as pastor at The Ridge Bible Church. If married, his wife must share this calling.',
				'Enthusiastically pursue growth as a disciple of Christ and engage in regular spiritual disciplines.',
				'Desire communion with God - seeking His wisdom, grace, and leading - on a daily basis.',
				'Model and encourage a lifestyle of prayer and promote the importance of prayer.',
				'Demonstrate maturity in Christian character without being self-important or arrogant.',
				'Affirm the authority of Scripture, the Sovereignty of God, the Lordship of Jesus Christ and the Guidance of the Holy Spirit.',
				'Interpret cultural issues according to their philosophical and theological foundations and equip the congregation to respond within a Biblical worldview to impact the world without compromising God’s Word.',
				'Warm and approachable. Welcomes and embraces a diversity of people from all ages, ethnicities, socio-economic statuses, cultures, and spiritual gifts.',
				'Model integrity and responsibility in family roles and relationships leading his own family in the discipline and admonition of the Lord.',
				'Model a Biblical work ethic.'
			]
		},
		{
			title: 'Professional Qualifications and Accountability',
			body: [
				'Possess prior experience in Biblical teaching, discipleship, and leadership.',
				'Demonstrate a deep understanding of scripture and the ability to study and prepare expository sermons.',
				'Understand and maintain the use of Greek and Hebrew during study and sermon preparation.',
				'Possess a sound theological education and belief system consistent with our statement of faith.',
				'Participate in continuing education through self-study and seminars.',
				'Establish office hours and maintain a personal weekly schedule with flexibility as needed.',
				'Participate in a network with other area pastors that meet regularly for support, resourcing, and encouragement.',
				'Utilize provided counseling time and funding for personal spiritual well-being.'
			]
		}
	];
</script>

<svelte:head>
	<title>Job Opening | Senior Pastor | The Ridge Bible Church</title>
	<meta
		name="description"
		content="The Ridge Bible Church is a great place to work. We are looking for a senior pastor. Learn more about the position and apply here."
	/>
</svelte:head>

<!-- Section Header -->
<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
	<Img
		src={church_photo}
		alt="The front view of The Ridge Bible Church"
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<div class="mx-auto max-w-2xl p-2 text-center bg-gray-900/60 rounded-lg">
		<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Job Openings</h1>
		<p class="mt-6 text-lg leading-8 text-gray-200">
			The Ridge Bible Church is a great place to work. See if there is a position for you.
		</p>
	</div>
</div>

<!-- Steps -->
<div class="bg-gray-50 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">How It Works</h2>
		</div>
		<dl class="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
			<FadeIn i={150 * 1}>
				<div class="card bg-white shadow-md px-4 py-2">
					<header class="card-header">
						<div class="w-[3.75rem] rounded-full bg-primary-500 mx-auto text-center">
							<h2 class="text-6xl text-white">1</h2>
						</div>
					</header>
					<section class="p-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						Explore
					</section>
					<footer class="card-footer text-base leading-7 text-gray-600">
						Read the info below to learn about our church and the Senior Pastor position.
					</footer>
				</div>
			</FadeIn>
			<FadeIn i={150 * 2}>
				<div class="card bg-white shadow-md px-4 py-2">
					<header class="card-header">
						<div class="w-[3.75rem] rounded-full bg-primary-500 mx-auto text-center">
							<h2 class="text-6xl text-white">2</h2>
						</div>
					</header>
					<section class="p-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						Apply
					</section>
					<footer class="card-footer text-base leading-7 text-gray-600">
						If you think you may be a good fit, click “Apply Now” at the bottom of this page.
					</footer>
				</div>
			</FadeIn>
			<FadeIn i={150 * 3}>
				<div class="card bg-white shadow-md px-4 py-2">
					<header class="card-header">
						<div class="w-[3.75rem] rounded-full bg-primary-500 mx-auto text-center">
							<h2 class="text-6xl text-white">3</h2>
						</div>
					</header>
					<section class="p-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						Get a Reply
					</section>
					<footer class="card-footer text-base leading-7 text-gray-600">
						We won’t keep you in the dark. We’ll let you know our desires moving forward.
					</footer>
				</div>
			</FadeIn>
		</dl>
	</div>
</div>

<!-- Letter to Candidate -->
<!-- <FadeIn>
	<div class="bg-gray-50 px-6 py-16 lg:px-8">
		<div
			class="bg-white mx-auto max-w-3xl text-base leading-7 text-gray-700 px-6 py-16 lg:px-8 rounded-md"
		>
			<p class="text-base font-semibold leading-7 text-primary-600">Greetings</p>
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Dear Senior Pastor Candidate,
			</h2>
			<p class="mt-6 text-xl leading-8">
				Thank you for your interest in the <span class="font-bold">full-time position</span> of Senior
				Pastor at The Ridge Bible Church. Our church is seeking a pastor who is committed to passionately
				serving the Lord Jesus Christ and is gifted in preaching, teaching, shepherding, and discipleship.
			</p>
			<div class="mt-10 max-w-2xl">
				<p>
					We hope the church profile and job description you’ll find below will give you a deeper
					understanding of our church and what we believe is the role of a Senior Pastor at
					Sylvania. After reviewing this information, <span class="font-medium"
						>if you believe your spiritual gifting and passion for ministry would potentially be a
						good fit for our church, please follow the application instructions at the end of this
						document.</span
					>
				</p>
				<p class="mt-8">
					We sincerely appreciate your thoughtful consideration and prayers. If you have any
					questions or require further clarification, please reach out to <span class="font-medium"
						>theridgepsc@gmail.com</span
					>.
				</p>
				<p class="mt-6">Sincerely,</p>
				<p class="mt-6">The Ridge Bible Church Search Team:</p>
			</div>
		</div>
	</div>
</FadeIn> -->

<!-- About TRBC -->
<FadeIn>
	<div class="bg-gray-50 px-6 py-16 lg:px-8">
		<div
			class="bg-white mx-auto max-w-3xl text-base leading-7 text-gray-700 px-6 py-16 lg:px-8 rounded-md"
		>
			<p class="text-base font-semibold leading-7 text-primary-600">A brief introduction</p>
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				About The Ridge Bible Church
			</h2>
			<p class="mt-6 text-xl leading-8">
				The Ridge Bible Church is an independent Bible church whose roots in our community reach
				back 75 years. Through sound biblical teaching, expository preaching, outreach, and deep
				relationships our purpose is to glorify God by growing people into loving and faithful
				servants of our Lord Jesus Christ. To learn what we believe theologically, see our <a
					href="/statement-of-faith"
					class="anchor">statement of faith</a
				>.
			</p>
			<div class="mt-10 max-w-2xl">
				<p>
					The Ridge Bible Church is in an area that is exploding with growth. New houses and
					apartment buildings are springing up everywhere within a 10-mile radius of our church.
					While the average age of our congregation is over 50 years old, we desire to reach our
					community for Christ and build vibrant ministries for people of all age groups. Currently
					we have outreach ministries at the local middle school, the county fair and we also
					support local and international ministries. Our Sunday morning services see an average
					attendance of 75 people (with approximately an additional 30 who watch online).
				</p>
				<p class="mt-8">
					Our staff currently consists of a part time associate pastor, a part time secretary, and a
					custodian. Our church governance can be described as elder-led, congregation-ruled and we
					abide by a constitution that was drafted and approved by our congregation two years ago.
					Our church, comprising of three buildings on seven acres (with potential for building
					expansion) owns the property and carries no debt.
				</p>
				<p class="mt-8">
					The Ridge Bible Church is pursuing a Senior Pastor who is deeply committed to serving
					Jesus Christ, and who actively seeks and desires fellowship and a growing relationship
					with Him and His people. Our ideal candidate is distinguished by solid biblical preaching
					and exemplifies servant leadership. He is humble, hospitable, loves people, and will
					demonstrate a heart for evangelism and discipleship. He will work to actively engage our
					congregation and community in truth and love without compromising God’s Word to appease
					the culture.
				</p>
				<p class="mt-6">
					Our congregation looks forward to working alongside our pastor with the joy of obedience
					for the glory of Jesus Christ our Savior and Lord.
				</p>
			</div>
		</div>
	</div>
</FadeIn>

<!-- Responsibilities -->

<div class="bg-gray-50 px-6 py-16 lg:px-8">
	<div
		class="bg-white mx-auto max-w-3xl text-base leading-7 text-gray-700 px-6 py-16 lg:px-8 rounded-md"
	>
		<p class="text-base font-semibold leading-7 text-primary-600">Job description</p>
		<h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
			Responsibilities of the Senior Pastor
		</h2>
		<div class="mt-10 max-w-2xl">
			{#each responsibilities as { title, body }}
				<h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
				<ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
					{#each body as statement, i}
						<FadeIn i={i * 75}>
							<li class="flex gap-x-3">
								<svg
									class="mt-1 h-5 w-5 flex-none text-primary-600"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<path
										d="M18 15a6 6 0 1 1 -10.853 -3.529c1.926-2.338 4.763-3.327 3.848-8.47 2.355 1.761 5.84 5.38 2.022 9.406-1.136 1.091-.244 2.767 1.221 2.593.882-.105 2.023-.966 3.23-2.3.532.68.532 1.717.532 2.3z"
									/>
								</svg>
								<span>{statement}</span>
							</li>
						</FadeIn>
					{/each}
				</ul>
			{/each}
		</div>
	</div>
</div>
<FadeIn>
	<div class="bg-gray-50 px-6 lg:px-8 pb-16">
		<div class="max-w-2xl mx-auto text-center">
			<a
				href="/careers/senior-pastor/senior-pastor-application"
				class="btn btn-xl variant-filled-primary">Apply Now</a
			>
		</div>
	</div>
</FadeIn>
