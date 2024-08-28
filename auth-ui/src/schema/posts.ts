export interface Post {
  id: number;
  username: string;
  profileUrl?: string;
  createdAt: string;
  emoji: string;
  comments: number;
  content: string;
  edited: boolean;
}
