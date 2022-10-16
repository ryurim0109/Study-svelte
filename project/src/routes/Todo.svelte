<script>
  import { todoStore } from "../store/todo";

  let todoList;
  todoStore.subscribe((store) => {
    todoList = store.todoList;
  });

  let newTodo = "";
  const completeStyle = "background:  #97ace3;";

  const onClickTodo = (idx) => {
    const tempTodoList = [...todoList];
    tempTodoList[idx].isComplete = !tempTodoList[idx].isComplete;

    todoStore.update((store) => ({
      ...store,
      todoList: tempTodoList,
    }));
  };

  const onInputNewTodo = (e) => {
    const { value } = e.target;
    newTodo = value;
  };
  const onClickTodoBtn = () => {
    if (newTodo === "") {
      window.alert("리스트를 입력해주세요");
    }
    const tempTodoList = [
      ...todoList,
      {
        text: newTodo,
        isComplete: false,
      },
    ];

    todoStore.update((store) => ({
      ...store,
      todoList: tempTodoList,
    }));
    newTodo = "";
  };
  const onKeydownNewTodo = (e) => {
    const { keyCode } = e;
    if (keyCode !== 13) {
      return;
    }
    const tempTodoList = [
      ...todoList,
      {
        text: newTodo,
        isComplete: false,
      },
    ];
    todoStore.update((store) => ({
      ...store,
      todoList: tempTodoList,
    }));
    newTodo = "";
  };
  const onClickDelete = (idx) => {
    todoList = todoList.filter((_, _idx) => idx !== _idx);
  };
</script>

<main>
  <h1>Todo List</h1>
  <ul class="todoList">
    {#each todoList as todo, idx}
      <li class="todo">
        <div class="done" on:click={() => onClickTodo(idx)}>
          <div
            style={`
						${todo.isComplete ? completeStyle : ""}
						`}
          />
          <p>{todo.text}</p>
        </div>
        <span on:click={() => onClickDelete(idx)}>❌</span>
      </li>
    {/each}
  </ul>
  <div class="todoInput">
    <input
      value={newTodo}
      placeholder="할일을 입력해주세요!"
      on:input={onInputNewTodo}
      on:keydown={onKeydownNewTodo}
    />
    <button on:click={onClickTodoBtn}>입력</button>
  </div>
</main>

<style>
  main {
    width: 100%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .todoInput {
    width: 800px;
    height: 50px;
    position: fixed;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  input {
    width: 700px;
    height: 50px;
    padding: 15px;
  }
  button {
    width: 80px;
    height: 50px;
    border: none;
    background-color: #97ace3;
  }
  .todoList {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 0 0;
  }
  .todoList li {
    width: 700px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .done {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .done > div {
    width: 30px;
    height: 30px;
    border: 1px solid #97ace3;
    transition: all 0.3 ease-in-out;
  }
  .done p {
    width: calc(100% - 40px);
    background-color: #fff;
    height: 30px;
    display: flex;
    align-items: center;
  }
  .todo span {
    width: 30px;
    height: 30px;
    background-color: #333;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
