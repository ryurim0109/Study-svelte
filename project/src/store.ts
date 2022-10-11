import { writable } from "svelte/store";

const blogList = [
  {
    id: 0,
    title: "제목1",
    content: "내용입니다.",
  },
  {
    id: 1,
    title: "제목2",
    content: "내용입니다.1",
  },
  {
    id: 2,
    title: "제목2",
    content: "내용입니다.2",
  },
];

let blogId = blogList[blogList.length - 1]["id"];
function setBlogValue() {
  const { subscribe, set } = writable("");
  return {
    subscribe,
    keyup: (value) => set(value),
  };
}

function setBlog() {
  const { subscribe, update } = writable(blogList);
  return {
    subscribe,
    insert: (value) =>
      update((list) => {
        const newList = [...list];
        const newTodo = {
          id: ++blogId,
          content: value.content,
          title: value.title,
        };
        return [...newList, newTodo];
      }),
  };
}
export const blogValue = setBlogValue();
