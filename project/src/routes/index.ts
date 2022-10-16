import Home from "./Home.svelte";
import Write from "./Write.svelte";
import Todo from "./Todo.svelte";

export default {
  "/": Home,
  "/todo": Todo,
  "/write": Write,
};
