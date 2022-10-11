<script lang="ts">
  let items = [
    { id: 1, name: "Milk" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Eggs" },
  ];

  const remove = (item) => {
    items = items.filter((i) => i !== item);
  };
</script>

<main>
  <h1>Blog</h1>

  <ul>
    {#each items as item}
      <li>
        <span>{item.name}</span>
        <button on:click={() => remove(item)}>❌</button>
      </li>
    {/each}
  </ul>
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
