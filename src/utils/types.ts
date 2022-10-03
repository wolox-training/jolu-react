export type Nullable<T> = T | null;
/* eslint-disable @typescript-eslint/naming-convention */
export interface User {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password_confirmation: string;
  [key: string]: any;
}

interface Errors {
  [key: string]: Array<string>;
  full_messages: Array<string>;
}

export interface ServiceResponse<T> {
  data: T;
  errors: Errors;
}

export interface LoginResponse {
  allow_password_change: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  locale: string;
  provider: string;
  uid: string;
  client: string;
}
