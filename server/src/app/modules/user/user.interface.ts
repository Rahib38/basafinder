export type TUser = {
  name: string;
  email: string;
  number: string;
  password: string;
  role?: 'tenant' | 'admin' | 'landlord';
};
