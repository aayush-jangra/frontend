import { Post } from "../schema/posts.schema";

export const usePosts = () => {
  const posts: Post[] = [
    {
      id: 1,
      username: "Theresa Webb",
      createdAt: "5 mins ago",
      profileUrl:
        "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg",
      emoji: "🤗",
      comments: 24,
      edited: false,
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      username: "Marvin McKinney",
      createdAt: "8 mins ago",
      emoji: "😯",
      comments: 12,
      edited: true,
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return { posts };
};
