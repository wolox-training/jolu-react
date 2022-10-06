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

export async function login(user: LoginResponse) {
  const res = await api.post<ServiceResponse<LoginResponse>>(`${userPath}/sign_in`, user);
  const userInfo = {
    'acces-token': res.headers?.['acces-token'],
    client: res.headers?.client,
    uid: res.headers?.uid
  };
  localStorage.setItem('userAccess', JSON.stringify(userInfo));
  if (res.ok) {
    return res;
  }
  throw res.data;
}
