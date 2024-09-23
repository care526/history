export type Organization = {
  id: number;
  name: string;
  owner_id: number;
};

export type Application = {
  app_id: string;
  name: string;
  logo: string;
};

export type Member = {
  id: number;
  name: string;
  avatar: string;
  register_time: string;
};
