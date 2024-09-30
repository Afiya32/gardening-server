// post interface
export interface IPost  {
  title: string;
  content: string;
  category: string;
  author: string; 
  photoUrl?: string;
  isPremium: boolean;
  upvotes: number;
  downvotes: number;
}
