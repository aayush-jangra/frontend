export interface Post {
  id: number;
  username: string;
  profileImage?: string;
  createdAt: string;
  emoji: string;
  comments: number;
  content: string;
  edited: boolean;
}
