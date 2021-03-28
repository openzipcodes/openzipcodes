<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  let zipcodeInput = "";

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

<h1>Free and Open Zipcode lookup in X lines of code</h1>

<input bind:value={zipcodeInput} />
<button on:click={() => lookup(zipcodeInput)}>lookup</button>

{result?.d_asenta}
