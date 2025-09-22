export interface IUser {
  name: string;
  email: string;
  password: string;
  apikey?: string | null;
  model?: string | null;
  modelApiKey?: string | null;
}