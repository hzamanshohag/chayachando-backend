export interface ICreateUser {
  name: string;
  email: string;
  pass: string;
  role: 'user' | 'admin';
}
