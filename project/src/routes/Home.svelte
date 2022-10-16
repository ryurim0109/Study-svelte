<script lang="ts">
  import { push } from "svelte-spa-router";
  import { blogStore } from "../store/blog";
  let blogList;
  blogStore.subscribe((store) => {
    blogList = store.blogList;
  });

  const onClickPost = (idx) => {
    push(`/blog/${idx}`);
  };
</script>

<main>
  <h1>Blog</h1>
  {#if !blogList.length}
    <div>텅...</div>
  {:else}
    <ul>
      {#each blogList as list, idx}
        <li on:click={() => onClickPost(idx)}>
          {idx + 1}. 제목 : {list.title}
        </li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    padding: 0 18px;
    min-height: 1200px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul,
  li {
    list-style: none;
  }
  ul {
    display: flex;
    width: 100%;
    height: 280px;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 30px;
  }
  li {
    width: 100%;
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 8px;
    padding: 0 16px;
  }
</style>
