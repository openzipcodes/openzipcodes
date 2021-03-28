<script context="module">
	export const prerender = true;

	export async function load({ page, fetch }) {
		const res = await fetch(`/blog/${page.params.slug}.json`);
		return {
			props: {
				post: await res.json()
			}
		};
	}
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>{post.d_asenta}</title>
</svelte:head>

<h1>{post.d_asenta}</h1>
<div class="post">
	{ post.d_estado}
</div>
