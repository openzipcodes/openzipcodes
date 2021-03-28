<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
    const res = await fetch("/by-zipcode.json");
    return {
      props: {
        posts: await res.json(),
      },
    };
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>blog</h1>

<ul>
  {#each posts as post}
    <li><a href="/by-zipcode/{post.slug}">{post.d_asenta}</a></li>
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
