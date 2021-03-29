<script context="module">
  export const prerender = true;

  export async function load({ page, fetch }) {
    const res = await fetch(`/by-zipcode/${page.params.zipcode}.json`);
    return {
      props: {
        post: await res.json(),
      },
    };
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.settlement}</title>
</svelte:head>

<h1>{post.settlement}</h1>
<div class="post">
  {post.settlement}
</div>
