export type createUserParams = {
  name: string;
  email: string;
  state: string;
  passwordHash: string;
};

export type IFindByEmail = {
  email: string;
};

export type GetIdParams = {
  id: string;
};
