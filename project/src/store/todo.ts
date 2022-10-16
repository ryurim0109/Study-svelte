import { writable } from "svelte/store";

export const todoStore = writable({
  todoList: [
    {
      text: "공부하기",
      isComplete: false,
    },
  ],
});
