<script>
  // 깔끔한 해시 모드 경로 변경
  import { link } from "svelte-spa-router";
</script>

<header>
  <a use:link href="/">Home</a>
  <a use:link href="/write">Write</a>
</header>

<style>
  header {
    width: 100%;
    position: fixed;
    height: 80px;
    float: left;
    display: flex;
    top: 0;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 1px solid #97ace3;
    z-index: 99;
    padding: 0 18px;
    box-sizing: border-box;
  }
  a {
    text-align: center;
    font-family: "Roboto";
    cursor: pointer;
    font-size: 24px;
  }
</style>
