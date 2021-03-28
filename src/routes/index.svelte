<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  let zipcodeInput = "";
  let selected = "";

  let result = {};
  const lookup = async (zipcode) => {
    try {
      const res = await fetch(`/by-zipcode/${zipcode}.json`);
      result = await res.json();
    } catch (error) {
      return;
    }
  };
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1>Free and Open Source</h1>
<h1>Zipcode lookup</h1>
<h1>for Colombia</h1>
<h1>from python</h1>
<h1>in X lines of code</h1>

<input class="bg-red-300" bind:value={zipcodeInput} />
<button on:click={() => lookup(zipcodeInput)}>lookup</button>

{#if result.zipcodes}
  <input bind:value={selected} list="ice-cream-flavors" />
  <datalist id="ice-cream-flavors">
    {#each result.zipcodes as zipcode}
      <option value={zipcode.d_asenta}>{zipcode.d_asenta}</option>
    {/each}
  </datalist>
{/if}

Features:
<ul>
  <li>Free thanks to hosting by Cloudflare</li>
  <li>Open Source and easy to Selfhost</li>
  <li>Fast because it's just static files on a CDN</li>
  <li>Up to date because builds are automated</li>
</ul>
