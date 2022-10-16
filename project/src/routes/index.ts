import Home from "./Home.svelte";
import Write from "./Write.svelte";
import Todo from "./Todo.svelte";
import BlogEdit from "./BlogEdit.svelte";
import BlogDetail from "./BlogDetail.svelte";

export default {
  "/": Home,
  "/todo": Todo,
  "/write": Write,
  "/blog/edit/:id": BlogEdit,
  "/blog/:id": BlogDetail,
};
