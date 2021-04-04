<script context="module">
	export const prerender = true;
</script>

<script>
	export let segment;
</script>

<main class="container mx-auto px-4 font-sans" style="background-color: #272727; color: #F5F5F5">
	<slot />
</main>

<footer>
	We are tracking website visits anonymously, respecting the <a
		class="underline"
		href="https://www.eff.org/issues/do-not-track"
		target="_blank"
		rel="noopener"
		>do not track
	</a> flag
</footer>
