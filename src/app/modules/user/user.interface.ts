export interface IUser {
    name?: string;
    email: string;
    password: string;
    photoUrl?: string;
    following?: string[]; // Array of user IDs
    followers?: string[]; // Array of user IDs
    verified?: boolean;
    role: 'admin' | 'user';
  }