import { writable } from "svelte/store";

export const blogStore = writable({
  blogList: [
    {
      title: "제목입니다",
      content: "내용입니다",
    },
  ],
});
