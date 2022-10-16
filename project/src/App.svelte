<script lang="ts">
  import routes from "./routes";
  import Router from "svelte-spa-router";
  import Header from "./Header.svelte";
</script>

<Header />
<main>
  <Router {routes} />
</main>

<style>
  :global(*) {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  :global(ul, li) {
    list-style: none;
  }
</style>
