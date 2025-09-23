export interface IUser {
  name?: string | null;
  email: string;
  password?: string;
  role?: string;
  apikey?: string | null;
  model?: string | null;
  modelApiKey?: string | null;
}
