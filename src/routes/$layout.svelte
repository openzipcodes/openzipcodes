<script context="module">
  export const prerender = true;
</script>

<script>
  import Nav from "$lib/Nav.svelte";
  export let segment;
</script>

<main
  class="container mx-auto px-4 font-sans"
  style="background-color: #272727; color: #F5F5F5"
>
  <slot />
</main>
