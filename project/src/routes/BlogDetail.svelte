<script lang="ts">
  import { blogStore } from "../store/blog";
  import { push } from "svelte-spa-router";
  export let params = { id: 0 };
  let blogDetail;
  blogStore.subscribe((store) => {
    blogDetail = store.blogList[params.id];
  });
  const onClickEdit = () => {
    push(`/blog/edit/${params.id}`);
  };
</script>

<main>
  <div>
    <h1>{blogDetail.title}</h1>
    <p class="editButton" on:click={onClickEdit}>수정하기</p>
  </div>
  <div class="content">{blogDetail.content}</div>
</main>

<style>
  main {
    width: 600px;
    padding: 0 18px;
    display: flex;
    flex-direction: column;

    height: 680px;
    margin: 0 auto;
    position: relative;
    top: 30px;
  }

  .content {
    width: 100%;
    border: none;
    height: 440px;
    border-radius: 8px;
    padding: 20px 10px;
    resize: none;
    font-size: 16px;
    background-color: #fff;
  }
</style>
