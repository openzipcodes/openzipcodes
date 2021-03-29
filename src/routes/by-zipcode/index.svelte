<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
    const res = await fetch("/by-zipcode.json");
    return {
      props: {
        zipcodes: await res.json(),
      },
    };
  }
</script>

<script>
  export let zipcodes;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<ul>
  {#each zipcodes as zipcode}
    <li><a href="/by-zipcode/{zipcode.zipcode}">{zipcode.zipcode}</a></li>
  {/each}
</ul>

<style>
  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    display: block;
    padding: 0.5em 0;
    border-bottom: 1px solid #999;
  }
</style>
