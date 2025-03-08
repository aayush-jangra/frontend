export const defaultComments = {
  1: {
    id: 1,
    author: "User 1",
    content: "This is my comment 1",
    replies: ["4", "5"],
    parentId: null,
  },
  2: {
    id: 2,
    author: "User 4",
    content: "This is my comment 2",
    replies: [],
    parentId: null,
  },
  3: {
    id: 3,
    author: "User 5",
    content: "This is my comment 3",
    replies: [],
    parentId: null,
  },
  4: {
    id: 4,
    author: "User2",
    content: "This does make sense",
    replies: ["6"],
    parentId: "1",
  },
  5: {
    id: 5,
    author: "User3",
    content: "This does not make sense",
    replies: [],
    parentId: "1",
  },
  6: {
    id: 6,
    author: "User3",
    content: "You are dumb",
    replies: [],
    parentId: "4",
  },
};
