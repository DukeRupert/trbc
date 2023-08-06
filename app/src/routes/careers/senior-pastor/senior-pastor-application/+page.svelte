<script lang="ts">
	import church_photo from '$lib/assets/IMG-1455.jpg?run';
	import Img from '@zerodevx/svelte-img';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { trigger_success_toast, trigger_error_toast } from '$lib/utils';
	import { page } from '$app/stores';

	export let data: PageData;
	// Superforms client API:
	const { form, posted, message, errors, constraints, enhance, capture, restore } = superForm(
		data.form
	);
	// Snapshot functionality
	export const snapshot = { capture, restore };

	$: if ($posted) {
		if ($page.status == 200) {
			trigger_success_toast($message);
		}
		if ($page.status == 400) {
			trigger_error_toast();
		}
	}
</script>

<svelte:head>
	<title>Apply | Senior Pastor | The Ridge Bible Church</title>
	<meta
		name="description"
		content="The Ridge Bible Church is a great place to work. We are looking for a senior pastor. Apply for the position here."
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

<!-- Application Form -->
<div class="bg-gray-50 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl gap-x-8 gap-y-20 px-2 lg:px-8">
		<div class="max-w-2xl mx-auto text-center">
			<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">The Application</h2>
			<p class="mt-1 text-sm leading-6 text-gray-600">
				Please fill out the form below and press submit. We will contact you as soon as possible
				letting you know that we have recieved your application.
			</p>
		</div>

		<!-- Form -->
		<form class="mt-8" method="POST" use:enhance>
			<div class="space-y-12 bg-white shadow-sm ring-1 ring-gray-900/5 rounded-xl px-2 pt-4">
				<div
					class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"
				>
					<div>
						<h2 class="text-base font-semibold leading-7 text-gray-900">Personal information</h2>
						<p class="mt-1 text-sm leading-6 text-gray-600">
							Please provide us with the information we need to contact you during this process.
						</p>
					</div>

					<div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
						<div class="sm:col-span-3">
							<label for="first_name" class="block text-sm font-medium leading-6 text-gray-900"
								>First name</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="first_name"
									id="first_name"
									autocomplete="given-name"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
									aria-invalid={$errors.first_name ? 'true' : undefined}
									bind:value={$form.first_name}
									{...$constraints.first_name}
								/>
							</div>
						</div>

						<div class="sm:col-span-3">
							<label for="last_name" class="block text-sm font-medium leading-6 text-gray-900"
								>Last name</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="last_name"
									id="last_name"
									autocomplete="family-name"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
									aria-invalid={$errors.last_name ? 'true' : undefined}
									bind:value={$form.last_name}
									{...$constraints.last_name}
								/>
							</div>
						</div>

						<div class="sm:col-span-4">
							<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
								>Email address</label
							>
							<div class="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
									aria-invalid={$errors.email ? 'true' : undefined}
									bind:value={$form.email}
									{...$constraints.email}
								/>
							</div>
						</div>

						<div class="col-span-full">
							<label for="street_address" class="block text-sm font-medium leading-6 text-gray-900"
								>Street address</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="street_address"
									id="street_address"
									autocomplete="street-address"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
									aria-invalid={$errors.first_name ? 'true' : undefined}
									bind:value={$form.street_address}
									{...$constraints.street_address}
								/>
							</div>
						</div>

						<div class="sm:col-span-2 sm:col-start-1">
							<label for="city" class="block text-sm font-medium leading-6 text-gray-900"
								>City</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="city"
									id="city"
									autocomplete="address-level2"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
									aria-invalid={$errors.city ? 'true' : undefined}
									bind:value={$form.city}
									{...$constraints.city}
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="region" class="block text-sm font-medium leading-6 text-gray-900"
								>State / Province</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="region"
									id="region"
									autocomplete="address-level1"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
									aria-invalid={$errors.region ? 'true' : undefined}
									bind:value={$form.region}
									{...$constraints.region}
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="postal_code" class="block text-sm font-medium leading-6 text-gray-900"
								>ZIP / Postal code</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="postal_code"
									id="postal_code"
									autocomplete="postal-code"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
									aria-invalid={$errors.postal_code ? 'true' : undefined}
									bind:value={$form.postal_code}
									{...$constraints.postal_code}
								/>
							</div>
						</div>

						<div class="sm:col-span-3">
							<label for="country" class="block text-sm font-medium leading-6 text-gray-900"
								>Country</label
							>
							<div class="mt-2">
								<select
									id="country"
									name="country"
									autocomplete="country-name"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option selected>United States</option>
									<option>Canada</option>
									<option>Mexico</option>
								</select>
							</div>
						</div>
					</div>
				</div>

				<div
					class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"
				>
					<div>
						<h2 class="text-base font-semibold leading-7 text-gray-900">What you believe</h2>
						<p class="mt-1 text-sm leading-6 text-gray-600">
							Briefly describe your beliefs regarding the following topics. Use Scripture to inform
							your response as appropriate.
						</p>
					</div>

					<div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
						<div class="sm:col-span-3 md:col-span-6">
							<label for="non_negotiable" class="block text-sm font-medium leading-6 text-gray-900"
								>What you believe to be the non-negotiable doctrines of the faith.</label
							>
							<div class="mt-2">
								<textarea
									id="non_negotiable"
									name="non_negotiable"
									rows="3"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
									aria-invalid={$errors.non_negotiable ? 'true' : undefined}
									bind:value={$form.non_negotiable}
									{...$constraints.non_negotiable}
								/>
							</div>
						</div>

						<div class="sm:col-span-3 md:col-span-6">
							<label for="role" class="block text-sm font-medium leading-6 text-gray-900"
								>What you believe to be the role of the senior pastor.</label
							>
							<div class="mt-2">
								<textarea
									id="role"
									name="role"
									rows="3"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
									aria-invalid={$errors.role ? 'true' : undefined}
									bind:value={$form.role}
									{...$constraints.role}
								/>
							</div>
						</div>

						<div class="sm:col-span-3 md:col-span-6">
							<label for="sof_response" class="block text-sm font-medium leading-6 text-gray-900"
								>Any disagreement or difference of opinion that you might have with The Ridge Bible
								Church <a href="/statement-of-faith">statement of faith</a>.</label
							>
							<div class="mt-2">
								<textarea
									id="sof_response"
									name="sof_response"
									rows="3"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
									aria-invalid={$errors.sof_response ? 'true' : undefined}
									bind:value={$form.sof_response}
									{...$constraints.sof_response}
								/>
							</div>
						</div>

						<div class="sm:col-span-3 md:col-span-6">
							<label for="testimony" class="block text-sm font-medium leading-6 text-gray-900"
								>Please share your personal testimony of coming to faith in Christ.</label
							>
							<div class="mt-2">
								<textarea
									id="testimony"
									name="testimony"
									rows="3"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
									aria-invalid={$errors.testimony ? 'true' : undefined}
									bind:value={$form.testimony}
									{...$constraints.testimony}
								/>
							</div>
						</div>

						<div class="sm:col-span-3 md:col-span-6">
							<label for="resume" class="block text-sm font-medium leading-6 text-gray-900"
								>Resume</label
							>
							<div
								class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
							>
								<div class="text-center max-w-sm">
									<svg
										class="mx-auto h-12 w-12 text-gray-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>

									<a
										href="https://docs.google.com/forms/d/e/1FAIpQLSeLtYmHiPMHG1xdaSZxY9NwzYTkdUwvhutvOtJtD7KmugBMSg/viewform"
										target="_blank"
										referrerpolicy="no-referrer"
										class="anchor text-sm leading-6">Click here to upload your resume</a
									>

									<p class="text-xs leading-5 text-gray-600">PDF, DOC, DOCX, up to 20MB</p>
									<p class="mt-4 text-xs leading-5 text-gray-600">
										or please email your resume to <a
											class="anchor"
											href="mailto:theridgepsc@gmail.com">theridgepsc@gmail.com</a
										> <br />with your name in the subject heading.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-6 flex items-center justify-end gap-x-6">
				<button type="submit" class="btn variant-filled-primary">Submit</button>
			</div>
		</form>
	</div>
</div>
