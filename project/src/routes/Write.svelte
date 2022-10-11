<script lang="ts">
  let titleValue = "";
  let changeValue = (e) => {
    titleValue = e.target.value;
    console.log(titleValue);
  };
</script>

<main>
  <h1>글쓰기</h1>
  <input
    type="text"
    placeholder="제목을 입력해주세요."
    bind:value={titleValue}
    on:change={(e) => changeValue(e)}
  />
  <textarea type="text" placeholder="내용을 입력해주세요." />
  <div>
    <button>취소</button>
    <button class="confirm">작성</button>
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
