<script lang="ts">
  import { blogStore } from "../store/blog";
  import { push } from "svelte-spa-router";

  let blogList;
  blogStore.subscribe((store) => {
    blogList = store.blogList;
  });
  let newblogList = {
    title: "",
    content: "",
  };

  const onInput = (e) => {
    const { value, name } = e.target;
    newblogList = { ...newblogList, [name]: value };
  };
  const onClickCancle = () => {
    push("/");
  };
  const onClickSubmit = () => {
    if (newblogList.title === "") {
      return window.alert("제목을 입력해주세요.");
    }
    if (newblogList.content === "") {
      return window.alert("내용을 입력해주세요.");
    }
    blogStore.update((store) => ({
      ...store,
      blogList: [...store.blogList, newblogList],
    }));
    push("/");
  };
</script>

<main>
  <h1>글쓰기</h1>
  <input
    type="text"
    name="title"
    placeholder="제목을 입력해주세요."
    bind:value={newblogList.title}
    on:change={onInput}
  />
  <textarea
    type="text"
    name="content"
    placeholder="내용을 입력해주세요."
    bind:value={newblogList.content}
    on:change={onInput}
  />
  <div>
    <button on:click={onClickCancle}>취소</button>
    <button class="confirm" on:click={onClickSubmit}>작성</button>
  </div>
</main>

<style>
  main {
    width: 600px;
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 680px;
    margin: 0 auto;
  }
  input {
    width: 100%;
    border: none;
    height: 60px;
    border-radius: 8px;
    padding: 0 10px;
    font-size: 16px;
  }
  textarea {
    width: 100%;
    border: none;
    height: 440px;
    border-radius: 8px;
    padding: 20px 10px;
    resize: none;
    font-size: 16px;
  }
  div {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
  }
  button {
    width: 49%;
    height: 50px;
    border: none;
    border-radius: 8px;
  }
  .confirm {
    background-color: #97ace3;
    color: #fff;
  }
</style>
