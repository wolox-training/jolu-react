import { ApiResponse } from 'apisauce';

import api from 'config/api';
import { ServiceResponse, User, LoginResponse } from 'utils/types';
import { SignUpResponse } from 'utils/signUpResponse';

const userPath = '/users';

export async function registerService(user: User) {
  const res = await api.post<ServiceResponse<SignUpResponse>>(userPath, user);
  if (res.ok) {
    return res;
  }
  throw res.data;
}

export async function login(user: User) {
  const res = await api.post<ServiceResponse<LoginResponse>>(`${userPath}/sign_in`, user);
  if (res.ok) {
    return res;
  }
  throw res.data;
}

function idSession(response: ApiResponse<User>) {
  const { headers } = response;
  const { uid, client, 'access-token': accessToken } = headers;

  return { uid, client, 'access-token': accessToken };
}
