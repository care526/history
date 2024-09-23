export type User = {
  id: number;
  name: string;
};

export type UserAndToken = {
  token: string;
  user: User;
};
