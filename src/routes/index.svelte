<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { browser } from '$app/env';

	const supportedCountries = {
		COL: { flag: '🇨🇴', name: 'Colombia' }
	};

	let selectedCountry = 'COL';

	let zipcodeInput = '';
	let selectedSettlement = '';

	let result = {};

	type Searching =
		| { type: 'initial' }
		| { type: 'searching' }
		| { type: 'notFound' }
		| { type: 'found'; sec: number };

	let searching: Searching = { type: 'initial' };
	const lookup = async () => {
		searching = { type: 'searching' };
		const start = Date.now();
		try {
			const res = await fetch(`/by-zipcode/${zipcodeInput}.json`);
			result = await res.json();
			searching = { type: 'found', sec: Date.now() - start };
			console.log(res.headers);
		} catch (error) {
			searching = { type: 'notFound' };
		}
	};
</script>

<svelte:head>
	<title>Open Zipcodes</title>
</svelte:head>

<section class="py-8 px-8 font-extrabold text-4xl leading-13">
	<h1>
		Free and <br />Open Source
		<b style="color: #FF858D">Zipcode Lookup</b> <br />for

		<b style="color: #FF858D">12+ </b>countries <br />
		in <b style="color: #FF858D">8</b> lines of python
	</h1>
</section>

<div class="flex">
	<section class="py-8 px-8 text-4xl">
		<div>
			<select
				bind:value={selectedCountry}
				list="supported-countries"
				class="text-black px-1 py-1 w-16"
				>{#each Object.keys(supportedCountries) as key}
					<option value={key}>{supportedCountries[key].flag} {supportedCountries[key].name}</option>
				{/each}</select
			>
			<div>
				<input class="text-black px-4 py-2" bind:value={zipcodeInput} on:input={lookup} />
				<div class="text-sm h-6">
					{searching.type == 'found' ? `Found in ${searching.sec} miliseconds` : ``}
				</div>
			</div>
		</div>
		<input
			class="text-black px-4 py-2"
			bind:value={selectedSettlement}
			list="settlements"
			placeholder={!result?.settlements ? 'Enter a zipcode first' : 'Select a settlement'}
		/>

		<datalist id="settlements">
			{#if result.settlements}
				{#each result.settlements as settlements}
					<option value={settlements.settlement}>{settlements.settlement}</option>
				{/each}
			{/if}
		</datalist>
	</section>
	<section>
		<code class="lang-bash">curl localhost:3000/by-zipcode/70110.json</code>
	</section>
</div>

<section class="py-8">
	Features:
	<div class="flex">
		<div><b>Free</b> to use thanks to hosting by Cloudflare</div>
		<div><b>Open Source</b> and easy to Selfhost</div>
		<div><b>Fast</b> because it's just static files on a CDN</div>
		<div><b>Up to date</b> because builds are automated</div>
		<div>Usable from any website because all <b>CORS</b> are welcome</div>
	</div>
</section>
