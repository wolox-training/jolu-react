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

/* eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function */
interface Errors {
  [key: string]: Array<string>;
  full_messages: Array<string>;
}

export interface ServiceResponse<T> {
  data: T;
  errors: Errors;
}
/* eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function */
export interface LoginResponse {
  email: string;
  password: string;
}

/* eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function */
